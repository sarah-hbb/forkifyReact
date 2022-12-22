import React from "react";
import classes from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../assets/images/logo.png";

import SearchBox from "./SearchBox";

import { TiPlusOutline, TiHeartOutline } from "react-icons/ti";


const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="nav">
      <ul className={classes["nav-list"]}>
        <div className={classes["logo"]} onClick={()=>router.push('/')}>
          <Image src={logo} layout="fill" objectFit="cover" />
        </div>
        <SearchBox />
        <div className={classes["nav-btns"]}>
          <li className={classes["nav__item--add-recipe"]}>
            <Link href={'/new-recipe'}>
              <button className={classes["nav__btn"]}>
                <TiPlusOutline />
                <span className={classes["nav__btn__span"]}> add recipe </span>
              </button>
            </Link>
          </li>
          <li className={classes["nav__item--bookmark"]}>
            <Link href={"/bookmarks"}>
              <button className={classes["nav__btn"]}>
                <TiHeartOutline />
                <span className={classes["nav__btn__span"]}> bookmarks </span>
              </button>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
