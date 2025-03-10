"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "0",
    title: "Web Development",
    description:
      "Хочу влиться в общество, но счастья нет...",
    href: "",
  },
  {
    num: "1",
    title: "Linux",
    description:
      "Ричард Столман One love, зачем нам Amazon? есть гараж и пк с Linux",
    href: "",
  },
  {
    num: "2",
    title: "Game-dev",
    description:
      "Может сделаю свой souls посвещенный вашему психическому здоровью",
    href: "",
  },
  {
    num: "3",
    title: "ComputerSience",
    description:
      "Зачем писать на С++ с большим количеством функций и еще платить за это? Возьми одного С-шника и мир изменится",
    href: "",
  },
  {
    num: "4",
    title: "3D-Modeling",
    description: "За 1000р сделаю 3D порно",

    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                {/* desctiption */}
                <p className="text-white/60">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
