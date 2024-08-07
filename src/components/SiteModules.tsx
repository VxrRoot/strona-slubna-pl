import {
  BookOpenText,
  MapPin,
  Send,
  Image,
  SquareCheckBig,
  Timer,
} from "lucide-react";

const modules = [
  {
    name: "Licznik",
    desc: "Licznik odlicza czas do wielkiego dnia, dodając emocji i budując napięcie przed zbliżającym się ślubem. Wyświetla dni, godziny, minuty i sekundy pozostałe do ceremonii",
    link: "/realizacja",
    img: <Timer className="w-12 h-12" />,
  },
  {
    name: "Przewodnik gościa",
    desc: "Kompleksowa sekcja zawierająca wszystkie niezbędne informacje dla uczestników ślubu.",
    link: "/realizacja#przewodnik-goscia",
    img: <BookOpenText className="w-12 h-12" />,
  },
  {
    name: "Wiadomość do gości",
    desc: "Funkcja ta pozwala parze młodej na komunikowanie się ze swoimi gośćmi. Można zamieścić osobiste powitanie, podziękowania oraz wszelkie ważne aktualizacje dotyczące ślubu i przyjęcia",
    link: "/realizacja#wiadomosc-do-gosci",
    img: <Send className="w-12 h-12" />,
  },
  {
    name: "Lokalizacje",
    desc: "Szczegółowe informacje o wszystkich miejscach związanych ze ślubem i przyjęciem. Adresy, mapy, wskazówki dojazdu oraz opcje parkingowe są tutaj przedstawione w przejrzysty sposób, ułatwiając gościom dotarcie na czas",
    link: "/realizacja#lokalizacja",
    img: <MapPin className="w-12 h-12" />,
  },
  {
    name: "Zdjęcia",
    desc: "Jest to sekcja w której para młoda może dzielić się pięknymi zdjęciami z sesji narzeczeńskiej, zdjęciami z przygotowań do ślubu oraz innymi ważnymi momentami",
    link: "/realizacja#zdjecia",
    img: <Image className="w-12 h-12" />,
  },
  {
    name: "Potwierdzenie przybycia",
    desc: "Umożliwia gościom łatwe i szybkie potwierdzenie ich obecności na ślubie. Goście mogą wypełnić prosty formularz online, co pomaga parze młodej w dokładnym zaplanowaniu uroczystości i przyjęcia ",
    link: "/realizacja#obecnosc",
    img: <SquareCheckBig className="w-12 h-12" />,
  },
];

const SiteModules = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14 w-full">
      {modules.map((module) => (
        <div className="border-2 h-full mx-auto border-primary rounded-t-full pt-32 pb-10 px-10 lg:px-10 max-w-[30rem] w-full flex flex-col text-primary justify-center gap-6 items-center">
          <span>{module.img}</span>
          <p className="text-4xl text-cormorant lg:text-5xl  uppercase text-center">
            {module.name}
          </p>
          <p className="text-center">{module.desc}</p>
          <a
            className="bg-primary font-semibold px-8 py-4 text-white w-full text-center mt-auto"
            href={module.link}
          >
            Sprawdź
          </a>
        </div>
      ))}
    </div>
  );
};

export default SiteModules;
