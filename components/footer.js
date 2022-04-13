import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="#" className={styles.facebook}>
          <Image src="../Image/facebook.svg" alt="facebook-logo" />
        </a>
        <a href="#" className={styles.tiktok}>
          <Image src="../Image/tiktok.svg" alt="facebook-logo" />
        </a>
        <a href="#" className={styles.instagram}>
          <Image src="../Image/instagram.svg" alt="facebook-logo" />
        </a>
      </div>
      <p className={styles.copyright}>
        <span>
          <Image src="../Image/copyright.svg" alt="copyright" />
        </span>
        2021 Guldkorn, ApS
      </p>
    </div>
  );
}
