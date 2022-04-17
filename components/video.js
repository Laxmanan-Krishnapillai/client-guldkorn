import { useState } from "react";
import styles from "../styles/Video.module.css";
export default function Video({ width, height, src }) {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={styles.buttonWrapper}>
        {" "}
        <object data="/icons/play-icon.svg"></object>
      </div>
      <section className={styles.videoWrapper}>
        <iframe
          width={""}
          height={""}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
