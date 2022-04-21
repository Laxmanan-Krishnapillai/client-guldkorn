import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function FooterPC() {
  return (
    <div className={styles.pcFooter}>
      <div className={styles.background}></div>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.facebook}>
          <object data="/icons/facebook.svg"></object>
        </a>
        <a href="#" className={styles.tiktok}>
          <object data="/icons/tiktok.svg"></object>
        </a>
        <a href="#" className={styles.instagram}>
          <object data="/icons/instagram.svg"></object>
        </a>
      </div>
      <p className={styles.copyright}>
        <span>
          <object data="/icons/copyright.svg"></object>
        </span>
        2021 Guldkorn, ApS
      </p>
    </div>
  );
}
