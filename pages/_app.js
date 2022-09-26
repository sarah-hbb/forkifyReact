import React from "react";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";

import BookmarksContextProvider from "../store/BookmarksContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* provide bookmark context for all child components */}
      <BookmarksContextProvider>
        <Component {...pageProps} />
      </BookmarksContextProvider>
    </Layout>
  );
}

export default MyApp;
