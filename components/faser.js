import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Faser.module.css";
export default function Faser() {
  return (
    <>
      <div className={styles.faser}>
        <div className={[styles.fase1, styles.current]}>
          <h3 className={styles.title}> 1</h3>
          <h4 className={styles.subtitle}>
            1.000 PREMIUM MEDLEMMER
            <p className={styles.description}>Q&A & NETWORKING</p>
          </h4>
          <Link href="/fase-1" className={styles.udforsk}>
            UDFORSK 1
          </Link>
        </div>
        <div className={styles.fase2}>
          <h3 className={styles.title}> 2</h3>
          <h4 className={styles.subtitle}>
            3.000 PREMIUM MEDLEMMER
            <p className={styles.description}>
              EKSKLUSIVE PRÆMIER OG GIVEAWAYS <b>HVER MÅNED</b>
            </p>
          </h4>
          <Link href="/fase-2" className={styles.udforsk}>
            UDFORSK 2
          </Link>
        </div>
        <div className={styles.fase3}>
          <h4 className={styles.subtitle}>
            5.000 PREMIUM MEDLEMMER<p className={styles.description}>V.I.P</p>
          </h4>
          <Link href="/fase-3" className={styles.udforsk}>
            UDFORSK 3
          </Link>
        </div>
        <div className={styles.fase4}>
          <h3 className={styles.title}> 4</h3>
          <h4 className={styles.subtitle}>
            20.000 PREMIUM MEDLEMMER
            <p className={styles.description}>SOCIAL EVENTS</p>
          </h4>
          <Link href="/fase-4" className={styles.udforsk}>
            UDFORSK 4
          </Link>
        </div>
      </div>
    </>
  );
}
