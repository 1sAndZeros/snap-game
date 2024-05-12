import { http, HttpResponse } from "msw";
import { DrawCardRes, Deck } from "@/types";
import { deckResponse, firstDraw } from "./responses";

const baseUrl: string = "https://deckofcardsapi.com/api";

// Success Handlers
const getDeck = http.get<object, object, Deck>(
  `${baseUrl}/deck/new/shuffle/?deck_count=1`,
  async () => HttpResponse.json(deckResponse)
);

const drawCard = http.get<object, object, DrawCardRes>(
  `${baseUrl}/deck/3p40paa87x90/draw/?count=1`,
  async () => HttpResponse.json(firstDraw)
);

// Error Handlers
export const deckError = http.get(
  `${baseUrl}/deck/new/shuffle/?deck_count=1`,
  () => new HttpResponse(null, { status: 401 })
);

export const drawError = http.get(
  `${baseUrl}/deck/3p40paa87x90/draw/?count=1`,
  () => new HttpResponse(null, { status: 401 })
);

const handlers = [getDeck, drawCard];

export default handlers;
