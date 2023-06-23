import React from "react";
import Image from "next/image";

import logo from "../../../public/images/logo.svg";

import { ActiveLink } from "../ActiveLink/ActiveLink";
import { SignInButton } from "../SingInButton/SignInButton";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <ActiveLink href='/' activeClassName={styles.active}>
            Home
          </ActiveLink>
          <ActiveLink href='/posts' activeClassName={styles.active} prefetch>
            Post
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
