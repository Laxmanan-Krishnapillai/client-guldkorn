import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Mobile-menu.module.css";
import { motion } from "framer-motion";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}></div>
      <div className={`${styles.container} ${isOpen ? "" : styles.hidden}`}>
        <object
          className={styles.stars}
          type="image/svg+xml"
          data="/icons/stjerner.svg"
        ></object>
        <div className={styles.logo}>
          <Image
            src="/icons/logo.png"
            alt="logo"
            width={1080}
            height={488}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.menu}>
          {[
            ["Home", "/"],
            ["App", "/app"],
            ["Eksamenspakker", "/eksamenspakker"],
            ["Social Club", "/social-club"],
            ["Kontakt", "/kontakt"],
          ].map(([title, url], i) => (
            <Link key={url} href={url} passHref>
              <motion.a
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className={styles.menuItem}
              >
                {title}
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
