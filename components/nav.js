import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
export default function Navbar(props) {
  const listRef = useRef();
  const router = useRouter();
  useEffect(() => {
    Array.from(listRef.current.querySelectorAll(`li ul li`)).map((el) => {
      if (el.children[0].href.endsWith(router.pathname)) {
        el.classList.add("active");
      }
    });
  }, []);

  return (
    <nav className={`main-menu ${props.dark ? "dark-menu" : ""}`}>
      <div
        className={`header-logo-wrapper`}
        style={{ top: props.top ? props.top : "0" }}
      >
        <Image
          src="/icons/logo.png"
          alt="logo"
          width={1080}
          height={488}
          layout="responsive"
          objectFit="cover"
          className={`header-logo-img`}
        />
      </div>
      <div className={`list-wrapper`}>
        <ul className={`list`} ref={listRef}>
          <li
            className={`list-items home ${
              router.pathname === "/kontakt" || "/home" ? "current" : ""
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
              router.pathname === "/goodgrades" || "/eksamenspakker"
                ? "current"
                : ""
            }`}
          >
            <ul className={`sub-list`}>
              <li className={`sub-list-items`}>
                <Link href="/eksamenspakker">Eksamenspakker</Link>
              </li>
            </ul>
          </li>
          <li
            className={`list-items app ${
              router.pathname === "/app" ? "current" : ""
            }`}
          >
            <ul className={`sub-list`}>
              <li className={`sub-list-items`}>
                <Link href="/app">App</Link>
              </li>
            </ul>
          </li>
          <li
            className={`list-items social-club ${
              router.pathname === "/roadmap" || "/social-club" ? "current" : ""
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
