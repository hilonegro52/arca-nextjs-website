import "../styles/globals.css";
import { LanguageProvider } from "../context/languageCtx";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <title>ARCA Software</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
