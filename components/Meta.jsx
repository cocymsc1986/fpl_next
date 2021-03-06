import Head from "next/head";
import theme from "../styles/theme";

export const Meta = () => (
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
        href="/public/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon-16x16.png"
      />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: ${theme.font.familyDefault};
        font-size: ${theme.font.size.body};
        color: ${theme.colours.black};
      }
    `}</style>
  </div>
);
