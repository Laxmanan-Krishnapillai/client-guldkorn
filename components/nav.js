import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="main-menu">
      <div className="header-logo-wrapper">
        <Image
          src="/icons/logo.png"
          alt="logo"
          width={1080}
          height={720}
          layout="responsive"
          objectFit="cover"
          className="header-logo-img"
        />
      </div>
      <div className="list-wrapper">
        <ul className="list">
          <li className="list-items home">
            <ul className="sub-list">
              <li className="sub-list-items">
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li className="sub-list-items active">
                <Link href="/">Home</Link>
              </li>
            </ul>
          </li>
          <li className="list-items goodgrades">
            <ul className="sub-list">
              <li className="sub-list-items">
                <Link href="/eksamenspakker">Eksamenspakker</Link>
              </li>
              <li className="sub-list-items active">
                <Link href="/goodgrades">GoodGrades</Link>
              </li>
              <li className="sub-list-items">
                <Link href="/mentor-premium">Mentor Premium</Link>
              </li>
            </ul>
          </li>
          <li className="list-items app">
            <ul className="sub-list">
              <li className="sub-list-items active">
                <Link href="/app">App</Link>
              </li>
            </ul>
          </li>
          <li className="list-items social-club current">
            <ul className="sub-list">
              <li className="sub-list-items">
                <Link href="/roadmap">Roadmap</Link>
              </li>
              <li className="sub-list-items active">
                <Link href="/social-club">Social Club</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
