import Link from "next/link";
import Footer from "./footer";
import Navbar from "./nav";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Faser.module.css";
export default function Faser(props) {
  const [current, setCurrent] = useState([]);
  const router = useRouter();
  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.sliderContainer}>
          {props.swiperData.map((item) => (
            <div className={styles.slide} key={item.id}>
              <h2 className={styles.slideTitle}>{item.title}</h2>
              <h3 className={styles.slideSubTitle}>{"FASE " + item.id}</h3>
              <p className={styles.slideDescription}>{item.description}</p>
            </div>
          ))}
          <div className={styles.buttonContainer}>
            {props.swiperData.length > 1
              ? props.swiperData.map((item) => (
                  <button
                    key={item.title}
                    className={styles.toggleButton}
                  ></button>
                ))
              : null}
          </div>
        </div>
        <div className={styles.faser}>
          <div className={`${styles.fase1} ${styles.current}`}>
            <h3 className={styles.title}>FASE 1</h3>
            <h4 className={styles.subTitle}>
              1.000 PREMIUM MEDLEMMER
              <p className={styles.description}>Q&A & NETWORKING</p>
            </h4>
            <Link href="/fase-1">
              <a
                className={`${styles.udforsk} ${
                  router.pathname === "/fase-1" ? styles.hidden : ""
                }`}
              >
                UDFORSK 1
              </a>
            </Link>
          </div>
          <div className={styles.fase2}>
            <h3 className={styles.title}>FASE 2</h3>
            <h4 className={styles.subTitle}>
              3.000 PREMIUM MEDLEMMER
              <p className={styles.description}>
                EKSKLUSIVE PRÆMIER OG GIVEAWAYS <b>HVER MÅNED</b>
              </p>
            </h4>
            <Link href="/fase-2">
              <a
                className={`${styles.udforsk} ${
                  router.pathname === "/fase-2" ? styles.hidden : ""
                }`}
              >
                UDFORSK 2
              </a>
            </Link>
          </div>
          <div className={styles.fase3}>
            <h3 className={styles.title}>FASE 3</h3>
            <h4 className={styles.subTitle}>
              5.000 PREMIUM MEDLEMMER<p className={styles.description}>V.I.P</p>
            </h4>
            <Link href="/fase-3">
              <a
                className={`${styles.udforsk} ${
                  router.pathname === "/fase-3" ? styles.hidden : ""
                }`}
              >
                UDFORSK 3
              </a>
            </Link>
          </div>
          <div className={styles.fase4}>
            <h3 className={styles.title}>FASE 4</h3>
            <h4 className={styles.subTitle}>
              20.000 PREMIUM MEDLEMMER
              <p className={styles.description}>SOCIAL EVENTS</p>
            </h4>
            <Link href="/fase-4">
              <a
                className={`${styles.udforsk} ${
                  router.pathname === "/fase-4" ? styles.hidden : ""
                }`}
              >
                UDFORSK 4
              </a>
            </Link>
          </div>
        </div>
        <MobileMenu />
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
