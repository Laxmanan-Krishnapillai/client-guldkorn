import Faser from "../components/faser";

const fase3 = [
  {
    id: 1,
    title: "V.I.P UDNÆVNELSE",
    description:
      "Hver måned udvælger vi 1-2 velfortjente medlemmer, der yder en ekstraordinær indsats ved at hjælpe andre og udgøre en uundværlig bidragsyder til klubben. De udvalgte medlemmer bliver tildelt en særlig status i klubben og modtager en hemmelig kontrakt, der medfølger rigtig store fordele $$$",
  },
];

export default function Fase3() {
  return (
    <>
      <Faser swiperData={fase3} />
    </>
  );
}
