import Faser from "../components/faser";

const fase4 = [
  {
    id: 1,
    title: "SOCIAL EVENTS",
    description:
      "For at skabe de mest optimale vilkår for vores community at lære hinanden at kende og møde ligesindede passionerede unge, vil vi i guldkorn stå for forskellige arrangementer helt eksklusivt for vores medlemmer -alt fra faglige seminarer med inspirerende eksperter til festlige fredagsbarer.",
  },
];

export default function Fase4() {
  return (
    <>
      <Faser swiperData={fase4} />
    </>
  );
}
