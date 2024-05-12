import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

// Component imports
import { Cards } from "@/components";

// Data imports
import { twoOfHearts, fourOfDiamonds } from "./mocks/cards";

describe("Test Cards", () => {
  it("renders correctly", () => {
    render(<Cards next={twoOfHearts} prev={fourOfDiamonds} />);

    const [previousCard, nextCard] =
      screen.getAllByTestId<HTMLImageElement>("card");

    expect(previousCard.src).toContain("4D");
    expect(nextCard.src).toContain("2H");
  });
});
