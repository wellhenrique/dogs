import React from 'react';

import { Link } from "react-router-dom";
import styles from "./header.module.css";

import Dogs from "../../assets/dogs.svg";
import { useUserContext } from '../../context/userContext';

export function Header() {
  const { user } = useUserContext()
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'><img src={Dogs} /></Link>
        {user ? (
          <Link className={styles.login} to='/conta'>{user.username}</Link>
        ) : (
          <Link className={styles.login} to='/login'>Login / Criar</Link>
        )}
      </nav>
    </header>
  )
}