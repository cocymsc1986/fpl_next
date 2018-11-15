import Head from 'next/head';
import theme from '../styles/theme';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet"></link>
			<title>Fantasy Prem</title>
    </Head>
    <style jsx global>{`
      body {
				margin: 0;
        font: ${theme.font.size.body} ${theme.font.familyDefault};
        color: ${theme.colours.black};
      }
    `}</style>
  </div>
)