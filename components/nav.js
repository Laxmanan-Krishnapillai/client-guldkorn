import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Navbar({ dark, top, navCSS }) {
  // JS function to get offset for thick active underline.
  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX + el.offsetWidth / 2,
      top: rect.top + window.scrollX + 50,
    };
  }
  const listRef = useRef();
  const router = useRouter();
  var [offsetActive, setOffsetActive] = useState({ left: 0, top: 0 });
  useEffect(() => {
    Array.from(listRef.current.querySelectorAll(`li ul li`)).map((el) => {
      if (el.children[0].href.endsWith(router.pathname)) {
        el.classList.add("active");
        console.log(getOffset(el));
        setOffsetActive(getOffset(el));
      }
    });
  }, []);
  const test = (array) => {
    if (array.some((char) => router.pathname.endsWith(char))) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <nav className={`main-menu ${dark ? "dark-menu" : ""}`} style={navCSS}>
      <div
        className={`header-logo-wrapper`}
        style={{ top: top ? top : "0", cursor: "pointer" }}
      >
        <Link passHref href="/">
          <Image
            src="/icons/logo.png"
            alt="logo"
            width={1080}
            height={488}
            layout="responsive"
            objectFit="cover"
            className={`header-logo-img`}
          />
        </Link>
      </div>
      <div
        className={`decorative-underline`}
        style={{ left: offsetActive.left, top: offsetActive.top }}
      ></div>
      <div className={`list-wrapper`}>
        <ul className={`list`} ref={listRef}>
          <li
            className={`list-items home ${
              test(["/", "/kontakt"]) ? "current" : ""
            }`}
          >
            <ul className={`sub-list`}>
              <li className={`sub-list-items`}>
                <Link href="/kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li className={`sub-list-items`}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`list-items goodgrades ${
              test(["/goodgrades", "/eksamenspakker"]) ? "current" : ""
            }`}
          >
            <ul className={`sub-list`}>
              <li className={`sub-list-items`}>
                <Link href="/eksamenspakker">Eksamenspakker</Link>
              </li>
            </ul>
          </li>
          <li className={`list-items app ${test(["/app"]) ? "current" : ""}`}>
            <ul className={`sub-list`}>
              <li className={`sub-list-items`}>
                <Link href="/app">App</Link>
              </li>
            </ul>
          </li>
          <li
            className={`list-items social-club ${
              test(["/roadmap", "/social-club"]) ? "current" : ""
            }`}
          >
            <ul className={`sub-list`}>
              <li className={`sub-list-items`}>
                <Link href="/roadmap">Roadmap</Link>
              </li>
              <li className={`sub-list-items`}>
                <Link href="/social-club">Social Club</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
