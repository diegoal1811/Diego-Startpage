import { links } from "./links";

export const config = {
  prompt: {
    user: "user",
    host: "home",
    defaultSearch: "https://www.google.com/search?q=",
    searchEngines: {
      g: "https://www.google.com/search?q=",
      yt: "https://www.youtube.com/results?search_query=",
      gh: "https://github.com/search?q=",
    },
  },
  theme: {
    colors: {
      background: "#1e1e2e",
      foreground: "#B8CCD9",
      primary: "#85badbff",
      secondary: "#B8CCD9",
      image: "background.jpg",
    },
  },
  links,
};
