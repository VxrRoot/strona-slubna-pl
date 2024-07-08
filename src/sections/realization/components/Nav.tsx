import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};
const navLinks = [
  { name: "Kiedy?", href: "/realizacja", id: 1 },
  { name: "Jak dojechać?", href: "#lokalizacja", id: 2 },
];
const navLinks2 = [
  { name: "Stoliki", href: "#stoliki", id: 2 },
  { name: "Obecność", href: "#obecnosc", id: 3 },
];

const NavLinks = ({
  isMobile,
  className,
  items,
  onClick,
}: {
  isMobile: boolean;
  className: string;
  onClick?: () => void;
  items: any[];
}) => (
  <div className={className}>
    {items.map(({ name, href, id }) => (
      <motion.a
        key={id}
        onClick={onClick}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
        className={`text-white text-center flex justify-center items-center whitespace-nowrap w-20 ${
          isMobile ? "text-primary" : "text-white"
        }`}
      >
        {name}
      </motion.a>
    ))}
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="text-xl  mb-24 flex text-white items-center absolute justify-between w-screen pb-6 pt-6 font-medium xl:grid grid-cols-3 bg-none mx-auto">
      <div className="lg:hidden ml-8">
        <Logo />
      </div>
      {/* Nav Items animating in  */}
      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
        >
          <NavLinks
            className="flex flex-col gap-24 text-lg "
            items={navLinks}
            onClick={() => setToggled((prev) => !prev)}
            isMobile={true}
          />
          <NavLinks
            className="flex flex-col gap-24 text-lg "
            items={navLinks2}
            isMobile={true}
          />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center w-screen  xl:justify-center xl:gap-12 xl:ml-auto "
      >
        <NavLinks className="flex gap-12" items={navLinks} isMobile={false} />
        <Logo />
        <NavLinks className="flex gap-12" items={navLinks2} isMobile={false} />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden mr-8
        `}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className={`line-1 ${
            toggled ? "bg-primary" : "bg-white"
          } block h-0.5 w-8 bg-content`}
        ></motion.span>

        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className={`line-1 ${
            toggled ? "bg-primary" : "bg-white"
          } block h-0.5 w-8 bg-content`}
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className={`line-1 ${
            toggled ? "bg-primary" : "bg-white"
          } block h-0.5 w-8 bg-content`}
        ></motion.span>
      </motion.div>
    </nav>
  );
}
