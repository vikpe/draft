export default {
  "extends": "@snowpack/app-scripts-react",
  "plugins": [
    "@snowpack/plugin-react-refresh",
  ],
  "mount": {
    build: '/',
    static: {
      url: "/static",
      static: true,
      resolve: false,
    },
  },
  "buildOptions": {
    "baseUrl": "https://vikpe.org/draft",
    "clean": true,
  },
};
