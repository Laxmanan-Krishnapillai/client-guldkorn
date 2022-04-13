import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Coming-soon.module.css";
export default function StartNow() {
  const [active, setActive] = useState(true);
  return (
    <div
      className={`${styles.popupWrapper} ${active ? "active" : "notActive"}`}
    >
      <div className={styles.popup}>
        <div className={styles.logoWrapper}>
          <Image
            src="/icons/logo.png"
            alt="logo"
            layout="fill"
            objectFit="cover"
            className={styles.logoImg}
          />
        </div>
        <div
          className={styles.closeButton}
          onClick={() => {
            setActive(false);
          }}
        >
          <Image
            src="/icons/close.svg"
            width={100}
            height={100}
            objectFit="cover"
            layout="responsive"
          />
        </div>

        <p className={styles.header}>KOM IGANG NU</p>
        <p className={styles.subHeader}>
          Indtast din information og se vores gratis demovideo
        </p>
        <form action="" className={styles.form}>
          <input type="text" name="name" placeholder="Dit navn" required />
          <input type="email" name="email" placeholder="Din email" required />
        </form>
        <button type="submit" className={styles.button}>
          SE DEMO
        </button>
      </div>
    </div>
  );
}
