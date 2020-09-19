# draft
> Single page web app for drafting

## Editing players and teams
Edit `src/data.js`

**Example**
```js
export const teams = {
  red: {
    id: "red",
    name: "Team Red",
    playerNames: [],
  },
  blue: {
    id: "blue",
    name: "Team Blue",
    playerNames: [],
  },
};

export const players = {
  XantoM: { name: "XantoM", country_code: "se" },
  bps: { name: "bps", country_code: "se" },
  Milton: { name: "Milton", country_code: "fi" },
  henu: { name: "henu", country_code: "fi" },
};
```

## Development
Start development server at localhost, live-reloading changes.
```bash
yarn start --reload
```

## Production
```bash
yarn build
```
