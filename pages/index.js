import MobileMenu from "../components/mobile-menu";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <MobileMenu isMobile={false} />
      <Footer />
    </>
  );
}
