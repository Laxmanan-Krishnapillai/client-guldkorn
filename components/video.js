import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Video.module.css";
export default function Video({
  width,
  height,
  src,
  buttonStyle,
  button = false,
  buttonAll = false,
}) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`${styles.buttonWrapper} ${
          button && buttonAll
            ? styles.buttonOnly
            : button
            ? styles.buttonDesktop
            : ""
        }`}
        style={buttonStyle}
      >
        <div
          onClick={(event) => {
            setActive(!active);
          }}
        >
          <Image
            alt={`playIcon`}
            src={`/icons/play-icon.svg`}
            width={100}
            height={100}
          />
        </div>
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
