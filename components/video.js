import { useState, useEffect } from "react";
import styles from "../styles/Video.module.css";
export default function Video({ width, height, src }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setActive(!active);
        }}
        className={`${styles.buttonWrapper}`}
      >
        <object data="/icons/play-icon.svg"></object>
      </div>
      <section className={`${styles.videoWrapper} ${active ? "show" : "hide"}`}>
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
