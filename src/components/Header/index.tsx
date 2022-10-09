import React from 'react';

import { Link } from "react-router-dom";
import styles from "./header.module.css";

import Dogs from "../../assets/dogs.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'><img src={Dogs} /></Link>
        <Link className={styles.login} to='/login'>Login / Criar</Link>
      </nav>
    </header>
  )
}