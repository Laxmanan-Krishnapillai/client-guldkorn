import Navbar from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import MobileMenu from "../components/mobile-menu";
import Link from "next/link";
import styles from "../styles/Eksamenspakker.module.css";
export default function EksamenspakkerOptions() {
  return (
    <>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <MobileMenu />
        <h3 className={styles.ourCommunity}>Styrk din faglighed</h3>
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
              <Link href="">
                <a className={styles.demo}>Gratis demo</a>
              </Link>
              <Link href="">
                <a className={styles.buyPack}>Køb pakke</a>
              </Link>
            </div>
          </div>
          <div className={styles.courseElement}>
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
              <Link href="">
                <a className={styles.demo}>Gratis demo</a>
              </Link>
              <Link href="">
                <a className={`${styles.buyPack} ${styles.danskA}`}>
                  Køb pakke
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.courseElement}>
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
            <div className={`${styles.buyButton} ${styles.gratis}`}>
              <Link href="">
                <a className={styles.buyPack}>Medfølger gratis ved køb</a>
              </Link>
            </div>
          </div>
        </section>
        <div className={styles.prosWrapper}>
          <div className={styles.prosItem}>
            <span className={styles.checkIcon}></span>
            <p className={styles.prosHeader}></p>
            <p className={styles.prosDescription}></p>
          </div>
        </div>
        <section className={styles.benefits}>
          <div className={styles.benefitsItem}>
            <Image
              src="/icons/checkIcon.svg"
              width="20px"
              alt="check-symbol"
              height="20px"
            />{" "}
            <h3 className={styles.benefitsTitle}>
              7 moduler inkl. stor værktøjskasse
            </h3>
            <p className={styles.benefitsDescription}>
              +15 timers videocoaching, eksamenstræning, tutorials, skabeloner
              m.v.
            </p>
          </div>
          <div className={styles.benefitsItem}>
            <Image
              src="/icons/checkIcon.svg"
              width="20px"
              alt="check-symbol"
              height="20px"
            />{" "}
            <h3 className={styles.benefitsTitle}>Adgang 24/7</h3>
            <p className={styles.benefitsDescription}>
              Tag modulerne i dit tempo. Du får unlimited adgang til alt
              indhold.
            </p>
          </div>
          <div className={styles.benefitsItem}>
            <Image
              src="/icons/checkIcon.svg"
              width="20px"
              alt="check-symbol"
              height="20px"
            />{" "}
            <h3 className={styles.benefitsTitle}>Community Access</h3>
            <p className={styles.benefitsDescription}>
              Bliv en del af et eksklusivt lukket community med live Q&A’s.
            </p>
          </div>
        </section>
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
