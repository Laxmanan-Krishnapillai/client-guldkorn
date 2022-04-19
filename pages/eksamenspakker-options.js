import Faser from "../components/faser";
import Navbar from "../components/nav";
import Link from "next/link";
import styles from "../styles/Eksamenspakker.module.css";
export default function EksamenspakkerOptions() {
  return (
    <>
      <h3 className={ourCommunity}>Styrk din faglighed</h3>
      <section className={styles.courses}>
        <div className={styles.courseElement}>
          <div className={styles.description}>
            <h1 className={styles.title}>Skriftlig Matematik A</h1>
            <a className={`${styles.textInfo} ${styles.lections}`}>
              21 Lektioner
            </a>
            <a className={`${styles.textInfo} ${styles.documents}`}>
              6 Dokumenter
            </a>
            <a className={`${styles.textInfo} ${styles.clock}`}>16 t.</a>
          </div>
          <div className={styles.buyButton}>
            <Link href="" className={styles.demo}>
              Gratis demo
            </Link>
            <Link href="" className={styles.buyPack}>
              Køb pakke
            </Link>
          </div>
        </div>
        <div className={courseElement}>
          <div className={styles.description}>
            <h1 className={styles.title}>Skriftlig Dansk A</h1>
            <a className={`${styles.textInfo} ${styles.lections}`}>
              21 Lektioner
            </a>
            <a className={`${styles.textInfo} ${styles.documents}`}>
              6 Dokumenter
            </a>
            <a className={`${styles.textInfo} ${styles.clock}`}>15 t.</a>
          </div>
          <div className={styles.buyButton}>
            <Link href="" className={styles.demo}>
              Gratis demo
            </Link>
            <Link href="" className={`${styles.buyPack} ${styles.danskA}`}>
              Køb pakke
            </Link>
          </div>
        </div>
        <div className={course - element}>
          <div className={styles.description}>
            <h1 className={styles.title}>Elite pakken</h1>
            <a className={`${styles.textInfo} ${styles.lections}`}>
              11 Lektioner
            </a>
            <a className={`${styles.textInfo} ${styles.documents}`}>
              5 Dokumenter
            </a>
            <a className={`${styles.textInfo} ${styles.clock}`}>12 t.</a>
          </div>
          <div className={`${styles.buyButton}${styles.gratis}`}>
            <Link href="">
              <a className={buyPack}>Medfølger gratis ved køb</a>
            </Link>
          </div>
        </div>
      </section>
      <div className={pros - wrapper}>
        <div className={pros - item}>
          <span className={check - icon}></span>
          <p className={pros - header}></p>
          <p className={pros - description}></p>
        </div>
      </div>
    </>
  );
}
