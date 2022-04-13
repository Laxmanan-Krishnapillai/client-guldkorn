import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Coming-soon.module.css";
export default function ComingSoon() {
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

        <p className={styles.header}>Guldkorn App</p>
        <p className={styles.subHeader}>KOMMER SNART</p>
        <button type="submit" className={styles.button}>
          SE ROADMAP
        </button>
      </div>
    </div>
  );
}
