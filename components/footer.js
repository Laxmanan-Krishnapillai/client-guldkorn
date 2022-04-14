import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.facebook}>
          <Image src="/icons/facebook.svg" alt="facebook-logo" layout="fill" />
        </a>
        <a href="#" className={styles.tiktok}>
          <Image src="/icons/tiktok.svg" alt="facebook-logo" layout="fill" />
        </a>
        <a href="#" className={styles.instagram}>
          <Image src="/icons/instagram.svg" layout="fill" alt="facebook-logo" />
        </a>
      </div>
      <p className={styles.copyright}>
        <span>
          <Image src="/icons/copyright.svg" alt="copyright" layout="fill" />
        </span>
        2021 Guldkorn, ApS
      </p>
    </div>
  );
}
