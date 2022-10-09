
import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: Props) {
  return (
    <button {...props} className={styles.button}>{children}</button>
  )
}