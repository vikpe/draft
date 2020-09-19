# draft
> Single page web app for drafting

## Install/getting started
1. Clone repo
2. `yarn install`
3. `yarn start --reload` - will serve app @ `http://localhost:8080`


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
Start development server at `http://localhost:8080`, live-reloading changes.
```bash
yarn start --reload
```

## Production
Bundle and output build to `build/`.
```bash
yarn build
```
