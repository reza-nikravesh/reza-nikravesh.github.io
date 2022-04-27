import React from "react";
import classes from "./404.module.scss";
import dictionary from "../public/dictionary.json";
import Head from "next/head";
const NotFound = () => {
  return (
    <div className={classes.container}>
        <Head>
            <title>Not Found</title>
        </Head>
      <h2>{dictionary.en.NotFound}</h2>
    </div>
  );
};

export default NotFound;
