
# Snap Game

This application simulates the classic card game SNAP! A virtual deck is loaded using the [Deck of Cards API](https://deckofcardsapi.com/) and the user has the ability to draw cards from the deck. The amount of value matches and suit matches are tracked and displayed once there are no remaining cards.
## Features

- Creates a virtual deck
- Draws cards one by one from deck
- Counts matching cards, both suit and value
- Tracks cards reamining in deck
- Displays number of matching cards once there are no cards reamining
- Sound effects

## Coming Soon

- Probabilty of the next card being a match
- Animation when drawing a card


## Tech Stack

**Client:** Typescript, React, styled-components

**API:** [Deck of Cards API](https://deckofcardsapi.com/)

**Testing:** Vitest, Mock Service Worker (MSW), Testing Library React
## Run Locally

Clone the project

```bash
  git clone https://github.com/1sAndZeros/snap-game my-project-name
```

Go to the project directory

```bash
  cd my-project-name
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm test
```


## Build

To build this project for production

```bash
  npm run build
```

You will find a dist/ folder with the compiled files