import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-129266648-1");
};

export const logPageView = () => {
  console.log(
    `Logging pageview for ${window.location.pathname}${window.location.search}`
  );
  ReactGA.set({ page: window.location });
  ReactGA.pageview(
    `${window.location.host}${window.location.pathname}${
      window.location.search
    }`
  );
};
