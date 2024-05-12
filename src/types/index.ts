export interface Card {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: "HEARTS" | "CLUBS" | "DIAMONDS" | "SPADES";
}

export interface Deck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

export interface DrawCardRes {
  success: boolean;
  deck_id: string;
  cards: Card[];
  remaining: number;
}

export interface Cards {
  next: Card | null;
  prev: Card | null;
}

export interface Matches {
  value: number;
  suit: number;
}
