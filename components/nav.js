import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={`main-menu`}>
      <div className={`header-logo-wrapper`}>
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
      <div className={`list-wrap per`}>
        <ul className={`list`}>
          <li
            className={`list-items home ${
              router.pathname === "/kontakt" || "/home" ? "current" : ""
            }`}
          >
            <ul className={`sub-list`}>
              <li className={`sub-list-items`}>
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li className={`sub-list-items active`}>
                <Link href="/">Home</Link>
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
              <li className={`sub-list-items active`}>
                <Link href="/goodgrades">GoodGrades</Link>
              </li>
              <li className={`sub-list-items`}>
                <Link href="/mentor-premium">Mentor Premium</Link>
              </li>
            </ul>
          </li>
          <li
            className={`list-items app ${
              router.pathname === "/app" ? "current" : ""
            }`}
          >
            <ul className={`sub-list`}>
              <li className={`sub-list-items active`}>
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
