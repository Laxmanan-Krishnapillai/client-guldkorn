import MobileMenu from "../components/mobile-menu";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Video from "../components/video";
import FooterPC from "../components/footerPC";
export default function Home() {
  return (
    <>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <MobileMenu />
        <Navbar navCSS={{ gridArea: "nav" }} />
        <Footer />
      </div>
      <FooterPC />
    </>
  );
}
