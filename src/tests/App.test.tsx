// library imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import server from "./mocks/server";

// Component imports
import App from "@/App";

// Type imports
import { DrawCardRes } from "@/types";

// Mock imports
import {
  fiveDiamondsDraw,
  lastDraw,
  secondDraw,
  spadeDraw,
} from "./mocks/responses";
import { deckError, drawError } from "./mocks/handlers";

describe("Test App", () => {
  it("renders correctly on load", async () => {
    render(<App />);

    screen.getByRole("heading", { level: 2, name: "SNAP" });
    const snapMessage = screen.getAllByRole("paragraph")[0];
    expect(snapMessage).toHaveClass("snap-message");
    expect(snapMessage).toHaveTextContent("");

    const cards = screen.getAllByTestId("placeholder");
    expect(cards.length).toBe(2);
    expect(cards[0]).toHaveClass("placeholder");
    expect(cards[1]).toHaveClass("placeholder");

    screen.getByRole("button", { name: /Draw Card/i });

    // check the cards remaining is correct
    await screen.findByText(/CARDS REMAINING: 52/i);
  });

  it("draws a card from the deck and displays remaining cards", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /Draw Card/i });
    await userEvent.click(button);

    const placeholder = await screen.findByTestId("card");
    const card = await screen.findByTestId<HTMLImageElement>("card");

    expect(placeholder).toBeInTheDocument();
    expect(card).toBeInTheDocument();
    expect(card.src).toContain("5S");

    // check the cards remaining is correct
    const cardsRemaining = await screen.findByTestId("remaining");
    expect(cardsRemaining).toHaveTextContent(/CARDS REMAINING: 51/i);
  });

  it("draws 2 cards from the deck", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Draw Card" });
    await userEvent.click(button); // click button to draw first card

    // mock api to draw a different second card
    server.use(
      http.get<object, object, DrawCardRes>(
        `https://deckofcardsapi.com/api/deck/3p40paa87x90/draw/?count=1`,
        async () => HttpResponse.json(secondDraw)
      )
    );

    await userEvent.click(button); // draw second card

    const cards = await screen.findAllByTestId<HTMLImageElement>("card");
    expect(cards.length).toBe(2);

    // check cards are correctly displayed
    const [previous, next] = cards;
    expect(previous.src).toContain("5S");
    expect(next.src).toContain("3C");

    const snapMessage = await screen.findByTestId("snapMessage");
    expect(snapMessage).toHaveTextContent("");

    // check the cards remaining is correct
    await screen.findByText(/CARDS REMAINING: 50/i);
  });

  it("displays match results after final draw", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /Draw Card/i });
    await userEvent.click(button); // click button to draw first card

    // mock api to draw final card from the deck
    server.use(
      http.get<object, object, DrawCardRes>(
        `https://deckofcardsapi.com/api/deck/3p40paa87x90/draw/?count=1`,
        async () => HttpResponse.json(lastDraw)
      )
    );

    await userEvent.click(button); // click button to draw final card

    // check the cards remaining is not in the document
    const cardsRemaining = screen.queryByTestId("remaining");
    expect(cardsRemaining).not.toBeInTheDocument();

    // check the value and suit matches
    await screen.findByText(/VALUE MATCHES: 0/i);
    await screen.findByText(/SUIT MATCHES: 0/i);
  });

  it("draws a 2 cards that match suit", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /Draw Card/i });
    await userEvent.click(button); // click button to draw first card

    // mock api to draw a different second card with matching suit
    server.use(
      http.get<object, object, DrawCardRes>(
        `https://deckofcardsapi.com/api/deck/3p40paa87x90/draw/?count=1`,
        async () => HttpResponse.json(spadeDraw)
      )
    );

    await userEvent.click(button); // click button to draw second card

    // check corret cards are displayed in the document
    const cards = await screen.findAllByTestId<HTMLImageElement>("card");
    const [previous, next] = cards;
    expect(previous.src).toContain("5S");
    expect(next.src).toContain("9S");

    // check the snap message is correct
    await screen.findByText(/SNAP SUIT/i);

    // check the value and suit matches
    await screen.findByText(/VALUE MATCHES: 0/i);
    await screen.findByText(/SUIT MATCHES: 1/i);
  });

  it("draws a 2 cards that match value", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /Draw Card/i });
    await userEvent.click(button); // click button to draw first card

    // mock api to draw a different second card with matching value
    server.use(
      http.get<object, object, DrawCardRes>(
        `https://deckofcardsapi.com/api/deck/3p40paa87x90/draw/?count=1`,
        async () => HttpResponse.json(fiveDiamondsDraw)
      )
    );

    await userEvent.click(button); // click button to draw second card

    // check corret cards are displayed in the document
    const cards = await screen.findAllByTestId<HTMLImageElement>("card");
    const [previous, next] = cards;
    expect(previous.src).toContain("5S");
    expect(next.src).toContain("5D");

    // check the snap message is correct
    await screen.findByText(/SNAP VALUE/i);

    // check the value and suit matches
    await screen.findByText(/VALUE MATCHES: 1/i);
    await screen.findByText(/SUIT MATCHES: 0/i);
  });

  it("fails to fetch deck", async () => {
    // mock api to return an error response
    server.use(deckError);

    render(<App />);

    // check the error message is displayed
    await screen.findByText(/Failed to load deck/i);
  });

  it("fails to fetch deck", async () => {
    // mock api to return an error response
    server.use(drawError);
    render(<App />);
    const button = screen.getByRole("button", { name: /Draw Card/i });
    await userEvent.click(button); // click button to draw first card

    // check the error message is displayed
    await screen.findByText(/Failed to draw card/i);
  });
});
