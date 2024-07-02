import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <div className="w-full max-w-5xl mt-16">
      <Accordion type="single" collapsible className="text-primary ">
        <AccordionItem value="item-1" className="border-primary">
          <AccordionTrigger className="text-2xl text-left">
            Jak długo trwa stworzenie strony?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-left">
            Tworzenie strony ślubnej zazwyczaj zajmuje od 2 do 4 tygodni, w
            zależności od złożoności projektu i dostarczenia wszystkich
            niezbędnych materiałów (zdjęcia, teksty, informacje od klienta).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-primary ">
          <AccordionTrigger className="text-2xl text-left">
            Czy mogę zobaczyć przykłady stron, które już stworzyliście?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-left">
            Tak, zapraszamy do odwiedzenia naszej sekcji Portfolio, gdzie
            prezentujemy wybrane projekty stron ślubnych, które stworzyliśmy dla
            naszych klientów.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-primary">
          <AccordionTrigger className="text-2xl text-left">
            Jakie informacje muszę dostarczyć, aby rozpocząć projekt?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-left">
            Na początku będziemy potrzebować podstawowych informacji o Waszym
            weselu, takich jak data, lokalizacja, lista atrakcji, historia
            Waszej pary, zdjęcia oraz wszelkie inne szczegóły, które
            chcielibyście umieścić na stronie.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-primary text-left">
          <AccordionTrigger className="text-2xl text-left">
            Czy oferujecie wsparcie techniczne po uruchomieniu strony?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-left">
            Tak, oferujemy pakiety wsparcia technicznego, które mogą obejmować
            zarówno pomoc w zarządzaniu stroną, jak i aktualizacje techniczne
            oraz zabezpieczenia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-primary text-left">
          <AccordionTrigger className="text-2xl text-left">
            Czy mogę dostosować wygląd strony według własnych preferencji?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-left">
            Tak, każda strona jest tworzona na zamówienie i możemy dostosować
            jej wygląd do Waszych preferencji, uwzględniając kolorystykę, styl
            oraz wszelkie inne wymagania estetyczne.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-primary text-left">
          <AccordionTrigger className="text-2xl text-left">
            Czy mogę zamówić stronę na inny rodzaj uroczystości?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-left">
            Chociaż specjalizujemy się w stronach ślubnych, jesteśmy otwarci na
            tworzenie stron na inne uroczystości, takie jak rocznice, urodziny,
            czy imprezy firmowe. Prosimy o kontakt w celu omówienia szczegółów.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-primary text-left">
          <AccordionTrigger className="text-2xl text-left">
            Czy oferujecie tworzenie stron w różnych językach?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-left">
            Tak, oferujemy możliwość tworzenia stron wielojęzycznych. Możemy
            dostosować stronę do wielu języków, aby była dostępna dla wszystkich
            Waszych gości, niezależnie od ich narodowości.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
