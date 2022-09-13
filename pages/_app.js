import React, { useContext } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";

import BookmarksContextProvider from "../store/BookmarksContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <BookmarksContextProvider>
        <Component {...pageProps} />
      </BookmarksContextProvider>
    </Layout>
  );
}

export default MyApp;
