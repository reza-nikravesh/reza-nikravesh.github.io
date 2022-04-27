import "../styles/App.scss";
import type { AppProps } from "next/app";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import classes from "./app.module.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={classes.container}>
        <Head>
          <link rel="shortcut icon" href="/rn.png" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
