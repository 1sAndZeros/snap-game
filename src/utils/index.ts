import { DrawCardRes, Deck, Card, Matches } from "@/types";
import React from "react";

export const fetchDeck = async (
  setDeck: React.Dispatch<React.SetStateAction<Deck | null>>
) => {
  const res = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  console.log(res);

  if (!res.ok) throw new Error("Failed to load deck");

  const deck = await res.json();
  setDeck(deck);
};

export const fetchCard = async (deckId: string): Promise<DrawCardRes> => {
  const res = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  if (!res.ok) throw new Error("Failed to draw card");
  const data = await res.json();
  return data;
};

export const checkMatch = (
  cards: Card[],
  current: Matches,
  setMatches: React.Dispatch<React.SetStateAction<Matches>>
) => {
  if (cards[0].value === cards[1].value) {
    setMatches({ ...current, value: current.value + 1 });
    return "VALUE";
  }
  if (cards[0].suit === cards[1].suit) {
    setMatches({ ...current, suit: current.suit + 1 });
    return "SUIT";
  }
  return null;
};
