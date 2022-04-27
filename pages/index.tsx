import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../Components/Sections/Profile/Profile";
import TabView from "../Components/Sections/TabView/TabView";
import classes from "./index.module.scss";
const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Reza Nikravesh - Protfolio</title>
        <meta name="description" content="Here you can know more aboute Reza Nikravesh"></meta>
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>
      <Profile />
      <TabView />
    </div>
  );
};

export default Home;
