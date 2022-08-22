import * as React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";

interface Props {}

export default class MyDocument extends Document<Props> {
  render() {
    return (
      <Html>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#000000" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          {/* PWA SETUP */}
          <meta name="application-name" content="Fixcoin.eco" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Fixcoin.eco" />
          <meta name="description" content="bla bla bla" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// // it's compatible with static-site generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage;
//
//   // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
//   // However, be aware that it can have global side effects.
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);
//
//   ctx.renderPage = () =>
//     originalRenderPage({
//       // eslint-disable-next-line react/display-name
//       enhanceApp: (App: any) => (props) =>
//         <App emotionCache={cache} {...props} />,
//     });
//
//   const initialProps = await Document.getInitialProps(ctx);
//   // This is important. It prevents emotion to render invalid HTML.
//   // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(" ")}`}
//       key={style.key}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));
//
//   return {
//     ...initialProps,
//     locale: ctx?.locale || "en",
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       ...emotionStyleTags,
//     ],
//   };
// };
