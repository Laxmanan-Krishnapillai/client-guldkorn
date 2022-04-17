import Faser from "../components/faser";
import Navbar from "../components/nav";

const fase1 = [
  {
    id: 1,
    title: "AFLASTNING",
    description:
      "GSC er først og fremmest en platform, hvor du kan få svar på dine spørgsmål. Her har alle medlemmer af klubben -elever som undervisere- mulighed for at hjælpe hinanden. Fra faglige spørgsmål til eksamenstips. No limits.",
  },
  {
    id: 2,
    title: "FÅ SVAR PÅ DINE SPØRGSMÅL",
    description:
      "Hver uge holder vi en live Q&A med en superstudent, som sidder klar på at besvare jeres spørgsmål med det samme.",
  },
  {
    id: 3,
    title: "NETWORKING",
    description:
      "Vi er sikre på, at alle medlemmer af Guldkorn kan noget helt særligt og vil mere end det sædvanlige. Lige så snart du er blevet en del af GSC, vil vi derfor tilbyde dig den gylden mulighed at oprette forbindelse og netværke med alle andre medlemmer i klubben. Opret nye forbindelser med personer, der deler samme passion som dig, og udvid dit netværk!",
  },
];

export default function Fase1() {
  return (
    <>
      <Faser swiperData={fase1} />
    </>
  );
}
