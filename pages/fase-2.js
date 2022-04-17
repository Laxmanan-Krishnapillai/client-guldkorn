import Faser from "../components/faser";
import Navbar from "../components/nav";

const fase2 = [
  {
    id: 1,
    title: "BELØNNING",
    description:
      "Som en del af klubben får du løbende adgang til at kunne deltage i lodtrækning af adskillige Giveaways! Jo længere tid du har været en del af vores community, desto flere eksklusive giveaways kan du deltage i. Præmierne kan have en værdi helt op til 15.000.kr.",
  },
];

export default function Fase2() {
  return (
    <>
      <Faser swiperData={fase2} />
    </>
  );
}
