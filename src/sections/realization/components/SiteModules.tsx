import {
  BookOpenText,
  MapPin,
  Send,
  Image,
  SquareCheckBig,
  Timer,
} from "lucide-react";
import DressIcon from "./icons/DressIcon";
import WineIcon from "./icons/WineIcon";
import KidIcon from "./icons/KidIcon";

const modules = [
  {
    name: "Prezenty",
    desc: "Od kwiatów wolimy napić się dobrego winka",
    img: <WineIcon/>,
  },
  {
    name: "Dress code",
    desc: "Przyjdz tak zeby było ci wygodnie i żebyś się dobrze bawił(a) ale nie prosimy nie ubierajcie białych sukni",
    img: <DressIcon/>,
  },
  {
    name: "Zabawy dla dzieci",
    desc: "Dla najmłodszych pociech przygotowaliśmy animatorów którzy zajmą się dziecmi.",
    img: <KidIcon/>,
  },
];

const SiteModules = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14 w-full">
      {modules.map((module) => (
        <div className="border-2 h-full mx-auto border-primary rounded-t-full pt-32 pb-10 px-10 lg:px-10 max-w-[30rem] w-full flex flex-col text-primary justify-start gap-6 items-center">
          <span className="w-10rem">{module.img}</span>
          <p className="text-4xl text-cormorant lg:text-5xl  uppercase text-center">
            {module.name}
          </p>
          <p className="text-center">{module.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default SiteModules;
