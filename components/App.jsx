import Page from "../layout";

export const App = ({ children }) => (
  <Page>
    <main>
      <div>{children}</div>
    </main>
  </Page>
);
