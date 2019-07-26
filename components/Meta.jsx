import Head from "next/head";
import theme from "../styles/theme";

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,700"
        rel="stylesheet"
      />
      <title>Fantasy Prem</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font: ${theme.font.size.body} ${theme.font.familyDefault};
        color: ${theme.colours.black};
      }
    `}</style>
  </div>
);
