import React from "react";
import classes from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/images/logo.png";

import SearchBox from "./SearchBox";
import { TiPlusOutline, TiHeartOutline } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className={classes["nav-list"]}>
        <div className={classes["logo"]}>
          <Image src={logo} width={100} height={80} />
        </div>
        <SearchBox />
        <div className={classes["nav-btns"]}>
          <li className={classes["nav__item--add-recipe"]}>
            <button className={classes["nav__btn"]}>
              <TiPlusOutline />
              <span> add recipe </span>
            </button>
          </li>
          <li className={classes["nav__item--bookmark"]}>
            <Link href={"/bookmarks"}>
              <button className={classes["nav__btn"]}>
                <TiHeartOutline />
                <span> bookmarks </span>{" "}
              </button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
