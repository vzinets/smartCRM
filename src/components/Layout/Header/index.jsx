"use client";
import React from "react";
import css from "./style.module.css";
import Image from "next/image";
import logo from "@/static/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const params = usePathname();

  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__inner}>
        <Link href="/">
          <div className={css.logo_container}>
          
            <div className={css.logo_img}>
              
                <Image src={logo} alt="logo" width={90} height={90} />
              
            </div>

            <span className={css.letters}>
              <span>m</span>
              <span>a</span>
              <span>r</span>
              <span>t</span>
              <span>C</span>
              <span>R</span>
              <span>M</span>
            </span>
          
          </div>
          </Link>
          <ul className={css.nav__list}>
            <li
              className={`${css.header__item} ${
                params == "/product" ? css.active : ""
              }`}
            >
              <Link className="blue__button" href="/product">
                Products
              </Link>
            </li>
            <li
              className={`${css.header__item} ${
                params == "/visit" ? css.active : ""
              }`}
            >
              <Link className="blue__button" href="/visit">
                Visits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
