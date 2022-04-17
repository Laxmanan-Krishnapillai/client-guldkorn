import MobileMenu from "../components/mobile-menu";
import Footer from "../components/footer";
import Navbar from "../components/nav";
export default function Home() {
  return (
    <>
      <MobileMenu isMobile={false} />
      <Navbar top={"80vh"} />
      <Footer />
    </>
  );
}
