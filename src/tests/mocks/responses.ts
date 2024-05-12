import { DrawCardRes, Deck } from "@/types";
import {
  fiveOfDiamonds,
  fiveOfSpades,
  nineOfSpades,
  threeOfClubs,
  twoOfHearts,
} from "./cards";

export const deckResponse: Deck = {
  success: true,
  deck_id: "3p40paa87x90",
  shuffled: true,
  remaining: 52,
};

export const firstDraw: DrawCardRes = {
  success: true,
  deck_id: "3p40paa87x90",
  cards: [fiveOfSpades],
  remaining: 51,
};

export const secondDraw: DrawCardRes = {
  success: true,
  deck_id: "3p40paa87x90",
  cards: [threeOfClubs],
  remaining: 50,
};

export const spadeDraw: DrawCardRes = {
  success: true,
  deck_id: "3p40paa87x90",
  cards: [nineOfSpades],
  remaining: 0,
};

export const fiveDiamondsDraw: DrawCardRes = {
  success: true,
  deck_id: "3p40paa87x90",
  cards: [fiveOfDiamonds],
  remaining: 0,
};

export const lastDraw: DrawCardRes = {
  success: true,
  deck_id: "3p40paa87x90",
  cards: [twoOfHearts],
  remaining: 0,
};
