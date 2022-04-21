import MobileMenu from "../components/mobile-menu";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Video from "../components/video";
export default function Eksamenspakker() {
  return (
    <>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <MobileMenu />
        <section className={styles.main}>
          <div className={styles.textContainer}>
            <h3 className={styles.ourCommunity}> VORES FÆLLES COMMUNITY</h3>
            <h1 className={styles.title}>Dit helt nye læringsunivers</h1>
            <h2 className={styles.subTitle}>
              Guldkorn er et innovativt læringsunivers skabt for at give
              studerende på folkeskoler og ungdomsuddannelser optimale
              betingelser for at udforske deres potentiale og udvikle sig til
              fagligt, socialt og mentalt stærkere individer.
            </h2>
            <Link href="/eksamenspakker-options">
              <a className={styles.button}></a>
            </Link>
          </div>
          <Video />
        </section>
        <Navbar />
        <Footer />
      </div>
    </>
  );
}
