import Image from "next/image";
import Link from "next/link";
import styles from "../styles/faser.module.css";
export default function Faser() {
  return (
    <>
      <div className={styles.slideShowContainer}>
        {/*Slideshow container*/}
        <div className={styles.slidesContainer}>
          {/*Full-width slides/quotes container*/}
          <div className={styles.slide}>
            <h2 className={styles.slideTitle}>AFLASTNING</h2>
            <h3 className={styles.slideSubTitle}>John Keats</h3>
            <p className={styles.slideDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              repellat est doloremque voluptatum laborum suscipit in optio vero
              nobis reprehenderitLorem ipsum dolor, sit amet consectetur
              adipisicing elit. Deleniti repellat est doloremque voluptatum
              laborum suscipit in optio vero nobis voluptatum laborum suscipit
              in optio vero nobis reprehenderit.
            </p>
          </div>

          <div className={styles.slide}>
            <h2 className={styles.slideTitle}>AFLASTNING</h2>
            <h3 className={styles.slideSubTitle}>Ernest Hemingway</h3>
            <p className={styles.slideDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              repellat est doloremque voluptatum laborum suscipit in optio vero
              nobis reprehenderitLorem ipsum dolor, sit amet consectetur
              adipisicing elit. Deleniti repellat est doloremque voluptatum
              laborum suscipit in optio vero nobis voluptatum laborum suscipit
              in optio vero nobis reprehenderit.
            </p>
          </div>

          <div className={styles.slide}>
            <h2 className={styles.slideTitle}>AFLASTNING</h2>
            <h3 className={styles.slideSubTitle}>Thomas A. Edison</h3>
            <p className={styles.slideDescription}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              repellat est doloremque voluptatum laborum suscipit in optio vero
              nobis reprehenderitLorem ipsum dolor, sit amet consectetur
              voluptatum laborum suscipit in optio vero nobis reprehenderit.
            </p>
          </div>
        </div>
        {/*Dots/bullets/indicators*/}
        <div className={styles.dotContainer}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        {/*Next/prev buttons */}
        <a className={styles.prev}>&#10094;</a>
        <a className={styles.next}>&#10095;</a>
      </div>
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
