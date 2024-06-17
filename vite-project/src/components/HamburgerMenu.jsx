import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "./routes";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className=''>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className=" w-30 fixed shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white items-center justify-center">
          <ul className="grid gap-2 items-center justify-center">
            {routes.map((route) => {
              const { Icon } = route;

              return (
                <li
                  key={route.title}
                  className=" p-[0.08rem] rounded-xl bg-white items-center justify-center"
                >
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                      "flex items-center justify-between w-full p-2 rounded-xl bg-gray-300"
                    }
                    href={route.href}
                  >
                    <span className="flex gap-1 text-lg text-blue-500">{route.title}</span>
                    <Icon className="text-xl text-blue-400" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};