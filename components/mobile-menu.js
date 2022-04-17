import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Mobile-menu.module.css";
import { motion, useAnimation } from "framer-motion";
export default function MobileMenu(isMobile) {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useAnimation();
  const listRef = useRef();
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-50px" },
  };
  const containerVariants = {
    open: {
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.2,
        when: "beforeChildren",
      },
      transitionEnd: {
        display: "flex",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.4,
        duration: 0.2,
        when: "afterChildren",
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const menuIconVariants = {
    open: {
      rotate: [0, 90, 0],
    },
    closed: {
      rotate: [0, -90, 0],
    },
  };
  return (
    <>
      <motion.div
        className={`${styles.menuIcon} ${isMobile ? "" : styles.hidden}`}
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        variants={menuIconVariants}
        animate={isOpen ? "open" : "closed"}
      ></motion.div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={containerVariants}
        className={`${styles.container} ${isMobile ? "" : styles.hidden}`}
      >
        <object
          className={styles.stars}
          type="image/svg+xml"
          data="/icons/stjerner.svg"
        ></object>
        <div className={styles.menu} ref={listRef}>
          {[
            ["Home", "/"],
            ["App", "/app"],
            ["Eksamenspakker", "/eksamenspakker"],
            ["Social Club", "/social-club"],
            ["Kontakt", "/kontakt"],
          ].map(([title, url], i) => (
            <Link key={url} href={url} passHref>
              <motion.a
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className={styles.menuItem}
              >
                {title}
              </motion.a>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
