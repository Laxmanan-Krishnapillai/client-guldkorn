import MobileMenu from "../components/mobile-menu";
import Footer from "../components/footer";
import FooterPC from "../components/footerPC";
import Navbar from "../components/nav";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import appcss from "../styles/App.module.css";
import Video from "../components/video";
export default function App() {
  return (
    <>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <MobileMenu />
        <section className={`${appcss.main} ${styles.main}`}>
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
              <a className={styles.button}>Download</a>
            </Link>
          </div>
          <Navbar navCSS={{ gridArea: "nav" }} />
          <Video
            button={true}
            buttonStyle={{ gridArea: "video", top: "-27.5px" }}
          />
        </section>
        <Footer />
      </div>
      <FooterPC />
    </>
  );
}
