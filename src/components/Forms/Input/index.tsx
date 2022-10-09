import { InputHTMLAttributes } from "react";

import styles from "./input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error: string | null
}

export function Input({ label, name, error, ...props }: Props) {
  return (
    <div className={styles.wrapper}>
      <label
        className={styles.label}
        htmlFor={name}>{label}
      </label>

      <input
        id={name}
        name={name}
        className={styles.input}
        autoComplete="off"
        {...props}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}