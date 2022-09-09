import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./SearchItem.module.css";
import Card from "../ui/Card";

const SearchItem = ({ id, title, publisher, imageUrl }) => {
  
  return (
    <Card>
      <Link href={`/recipe/${id}`}>
        <li className={classes["search-item"]}>
          <div className={classes["search-img"]}>
            <Image src={imageUrl} layout="fill" objectFit="cover" priority />
          </div>
          <h1 className={classes["search-title"]}>{title}</h1>

          <p className={classes["search-description"]}>{publisher}</p>
        </li>
      </Link>
    </Card>
  );
};

export default SearchItem;
