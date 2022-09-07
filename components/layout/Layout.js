import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes["layout"]}>
      <Head>
        <title>Forkify with React</title>
        <meta name="description" content="forkify with react" />
        <link
          rel="shortcut icon"
          href="./favicon.ico
          "
        />
      </Head>

      <Navbar />
      <main>{props.children}</main>

      <footer className={classes["layout-footer"]}>Sarah Habibi - 2022</footer>
    </div>
  );
};

export default Layout;
