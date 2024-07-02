import { motion } from "framer-motion";
import { useState } from "react";
import InstagramIcon from "../icons/InstagramIcon";
import TiktokIcon from "../icons/TiktokIcon";

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
  visible: { opacity: 1, x: 0, display: "flex" },
  hidden: { opacity: 1, x: "-100%", display: "none" },
};
const navLinks = [
  { name: "O nas", href: "/#o-nas", id: 1 },
  { name: "Oferta", href: "/#oferta", id: 2 },
  { name: "Kontakt", href: "/#kontakt", id: 3 },
];

const NavLinks = ({
  isMobile,
  onClick,
  className,
}: {
  isMobile: boolean;
  className: string;
  onClick?: () => void;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        onClick={onClick}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
        className="text-center text-primary text-cormorant text-xl flex justify-center items-center whitespace-nowrap "
      >
        {name}
      </motion.a>
    ))}
    <div className="flex gap-8">
      <a href="https://www.instagram.com/strona_slubna/">
        <InstagramIcon fill="#6c4e3f" />
      </a>
      <a href="https://www.tiktok.com/@strona_slubna?lang=pl-PL">
        <TiktokIcon fill="#6c4e3f" />
      </a>
    </div>
  </div>
);

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav className="relative   flex items-center justify-between  font-medium  max-w-[1440px] mx-auto">
      <div className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg  xl:ml-auto ">
        <NavLinks className="flex gap-12" isMobile={false} />
      </div>

      {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
        >
          <NavLinks
            onClick={() => setToggled((prev) => !prev)}
            className="flex flex-col gap-24 text-lg "
            isMobile={true}
          />
        </motion.div>
      )}

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className="line-1 bg-primary block h-0.5 w-8 bg-content"
        />
        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className="line-2 bg-primary block h-0.5 w-6 bg-content"
        />
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 24,
          }}
          className="line-3 bg-primary block h-0.5 w-4 bg-content"
        />
      </motion.div>
    </nav>
  );
}
