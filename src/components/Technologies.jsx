import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { SiNestjs } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { GoCopilot } from "react-icons/go";
import { FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-neutral-800 pb-24 ">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4 items-center justify-center max-w-5xl mx-auto px-2"
      >
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <RiReactjsLine className="text-4xl sm:text-6xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <TbBrandNextjs className="text-4xl sm:text-6xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <SiMongodb className="text-4xl sm:text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <SiExpress className="text-4xl sm:text-6xl text-red-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <FaPython className="text-4xl sm:text-6xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <FaNodeJs className="text-4xl sm:text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <TbBrandTypescript className="text-4xl sm:text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <DiRedis className="text-4xl sm:text-6xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <SiNestjs className="text-4xl sm:text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <FaGithub className="text-4xl sm:text-6xl text-gray-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <SiFastapi className="text-4xl sm:text-6xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <FaAws className="text-4xl sm:text-6xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <FaDocker className="text-4xl sm:text-6xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2 sm:p-4 col-span-1 flex justify-center"
        >
          <GoCopilot className="text-4xl sm:text-6xl text-green-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
