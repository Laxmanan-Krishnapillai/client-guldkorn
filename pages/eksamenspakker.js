import MobileMenu from "../components/mobile-menu";
import Footer from "../components/footer";
import FooterPC from "../components/footerPC";
import Navbar from "../components/nav";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import appcss from "../styles/App.module.css";
import Video from "../components/video";
export default function Eksamenspakker() {
  return (
    <>
      <div className={`contentWrapper ${styles.contentWrapper}`}>
        <div className="eksamenspakker-bg-pc">
          <Image
            src="/icons/baggrundeksamenspakker.png"
            alt="eksamenspakker baggrund"
            width={901}
            height={1282}
            objectFit={"contain"}
          />
        </div>
        <div className="eksamenspakker-bg">
          <Image
            src="/icons/eksamenspakker.png"
            alt="eksamenspakker baggrund"
            width={671}
            height={729}
            objectFit={"contain"}
          />
        </div>
        <div className="fag-bg">
          <Image
            src="/icons/fag.png"
            alt="fag baggrund"
            width={435}
            height={366}
          />
        </div>
        <MobileMenu />
        <section className={`${appcss.main} ${styles.main}`}>
          <div className={styles.textContainer}>
            <h3 className={styles.ourCommunity}> VORES FÆLLES COMMUNITY</h3>
            <h1 className={styles.title}>
              Giv en toptunet performance til eksamen med Guldkorns eksklusive
              eksamenspakker
            </h1>
            <h2 className={styles.subTitle}>
              Ønsker du at blive rustet inden din eksamen? Se vores udvalg af
              eksamenspakker.
            </h2>
            <Link href="/eksamenspakker-options">
              <a className={styles.button} style={{ maxWidth: "250px" }}>
                Find din eksamenspakke
              </a>
            </Link>
          </div>
          <Navbar
            navCSS={{
              gridArea: "nav",
              zIndex: "999 !important",
              zIndex: "200",
            }}
          />
          <Video
            button={true}
            buttonStyle={{
              gridArea: "video",
              top: "30px",
              left: "250px",
              zIndex: "200",
            }}
          />
        </section>
        <Footer />
      </div>
      <FooterPC />
    </>
  );
}
