import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.svg";

import { SignInButton } from "../SingInButton/SignInButton";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <Link href='/' className={styles.active}>
            Home
          </Link>
          <Link href='/posts' prefetch>Post</Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
