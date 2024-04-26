# draft [![Deploy](https://github.com/vikpe/draft/actions/workflows/deploy.yml/badge.svg)](https://github.com/vikpe/draft/actions/workflows/deploy.yml)

> Single page web app for drafting

## Install/getting started

1. Clone repo
2. `yarn install`
3. `yarn dev` - will serve app @ `http://localhost:5173`

## Editing players and teams

Edit `src/data.js`

**Example**

```js
export const teams = {
  red: {
    id: "red",
    playerNames: ["bps"],
    sortOrder: 1,
  },
  blue: {
    id: "blue",
    playerNames: ["Milton"],
    sortOrder: 2,
  },
};

export const players = {
  "AiRman": Player("AiRman", "pl"),
  "Andeh": Player("Andeh", "se"),
  "anni": Player("anni", "de"),
  "badsebi": Player("badsebi", "pl"),
};
```

## Development

Start development server at `http://localhost:5173`, live-reloading changes.

```bash
yarn dev
```

## Production

Bundle and output build to `dist/`.

```bash
yarn build
```
