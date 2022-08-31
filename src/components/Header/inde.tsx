import React from 'react';
import Image from 'next/image';
// import images
import logo from '../../../public/images/logo.svg';
// import styles
import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="ig.news" />
        <nav>
          <a className={styles.active} href="#">Home</a>
          <a href="#">Post</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}

export default Header;