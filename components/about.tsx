"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-2 text-black text-[16px] dark:text-white text-left">
      I'm a Mern-stack developer in India. I am creative and passionate about design and technology so I always try to craft great-looking software products.
        <br /> <br />
        Pursuing a Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal.
       <br />
        A keen interest in playing Cricket.
        <br /> <br />
        <span className="underline">Programming Journey:  </span> 
        I'm a self-taught programmer on a quest to explore the exciting world of technology. My creative spirit is matched only by my dedication to design and technology. 
        <br />This combination of skills and enthusiasm makes me a valuable asset in the dynamic field of web development.
        <br />
        <br /> 
        And last but not least, please don't hesitate to <span className="text-bold">contact me!</span>
      </p>



    </motion.section>
  );
}
