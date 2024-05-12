import { useState, useEffect } from "react";
import { Button, Cards, Header, Message } from "@/components";
import { Deck, Matches, Cards as ICards, Card } from "@/types";
import { checkMatch, fetchCard, fetchDeck } from "@/utils";
import flipCardSound from "@/assets/flipcard.mp3";
import { initialCards, initialMatches } from "@/data";
import Wrapper from "@/styles/App";

const App = () => {
  const [snapType, setSnapType] = useState<"VALUE" | "SUIT" | null>(null);
  const [deck, setDeck] = useState<Deck | null>(null);
  const [cards, setCards] = useState<ICards>(initialCards);
  const [matches, setMatches] = useState<Matches>(initialMatches);
  const [drawnCards, setDrawnCards] = useState<Card[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const flipSound = new Audio(flipCardSound);

  useEffect(() => {
    fetchDeck(setDeck).catch((error) => {
      setErrorMessage(error.message);
    });
  }, []);

  useEffect(() => {
    setSnapType(null);
    if (!cards.prev || !cards.next) return;
    const snapType = checkMatch([cards.prev, cards.next], matches, setMatches);
    setSnapType(snapType);
  }, [cards]);

  const drawCard = async () => {
    try {
      if (!deck) return;
      const res = await fetchCard(deck?.deck_id);
      const card = res.cards[0];
      await flipSound.play();
      setDeck({
        ...deck,
        remaining: res.remaining,
      });
      setCards((prevValues) => ({
        next: card,
        prev: prevValues?.next,
      }));
      setDrawnCards([...drawnCards, card]);
    } catch (error) {
      let message;
      if (error instanceof Error) {
        message = error.message;
        setErrorMessage(message);
      }
    }
  };

  const snapMessage = snapType ? `SNAP ${snapType}` : null;

  return (
    <Wrapper>
      <Header title="SNAP" />
      <Message data-testid="snapMessage" className="snap-message">
        {snapMessage}
      </Message>
      <Cards next={cards.next} prev={cards.prev} />
      {deck?.remaining == 0 ? (
        <>
          <Message>VALUE MATCHES: {matches.value}</Message>
          <Message>SUIT MATCHES: {matches.suit}</Message>
        </>
      ) : (
        <>
          <Button text="Draw Card" onClick={drawCard} />
          {deck && (
            <Message data-testid="remaining" className="remaining">
              Cards Remaining: {deck.remaining}
            </Message>
          )}
        </>
      )}
      {errorMessage && <Message className="error">{errorMessage}</Message>}
    </Wrapper>
  );
};

export default App;
