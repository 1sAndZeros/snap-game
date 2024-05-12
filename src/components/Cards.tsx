import { Card as ICard } from "@/types";
import Wrapper from "@/styles/Cards";

const Card = ({ card }: { card: ICard | null }) => {
  return card ? (
    <img data-testid="card" className="card" src={card?.image} />
  ) : (
    <div data-testid="placeholder" className="placeholder"></div>
  );
};

interface CardsProps {
  next: ICard | null;
  prev: ICard | null;
}

const Cards = ({ next, prev }: CardsProps) => (
  <Wrapper>
    <Card card={prev} />
    <Card card={next} />
  </Wrapper>
);

export default Cards;
