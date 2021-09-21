export default {
  "extends": "@snowpack/app-scripts-react",
  "mount": {
    src: {
      url: "/_dist_",
      static: false,
      resolve: true,
    },
    public: "/",
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
