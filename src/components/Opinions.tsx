import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GoogleIcon from "../icons/GoogleIcon";
import StarIcon from "../icons/StarIcon";
import { MoveLeft, MoveRight } from "lucide-react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const OpinionStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(changeCard, 5000);
  };

  const changeCard = () => {
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards]; // create a copy of the array
      newArray.unshift(newArray.pop()!); // move the last element to the front
      return newArray;
    });
  };

  return (
    <div className="relative  h-[28rem] w-full md:h-60 ">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-primary h-[28rem] lg:h-80 w-full rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            onClick={() => {
              changeCard();
              clearInterval(interval);
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="flex gap-1 items-center">
              <span className="mr-4">
                <GoogleIcon />
              </span>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="font-normal text-creme">{card.content}</div>
            <div>
              <p className="text-creme font-medium ">{card.name}</p>
              <p className="text-creme font-normal">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
      <div
        className="cursor-pointer absolute bottom-[-50px] lg:bottom-[-120px] right-4"
        onClick={() => {
          changeCard();
          clearInterval(interval);
        }}
      >
        <MoveRight className="w-10 h-10 stroke-[#6c4e3f]" />
      </div>
      <div
        className="cursor-pointer absolute bottom-[-50px] left-4 lg:bottom-[-120px]"
        onClick={() => {
          changeCard();
          clearInterval(interval);
        }}
      >
        <MoveLeft className="w-10 h-10 stroke-[#6c4e3f]" />
      </div>
    </div>
  );
};

export default OpinionStack;
