import React, { Fragment } from "react";
import Image from "next/image";
import classes from "./NoResultForSearch.module.css";
import noresult from "../../assets/images/noresult.svg";

const NoPropertyFound = () => {
  return (
    <Fragment>
      <div className={classes.noresult}>
        <Image src={noresult} width={200} height={200} />
        <p>no result found for your search!</p>
      </div>
    </Fragment>
  );
};

export default NoPropertyFound;
