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
      <p className="mb-3">
      Passionate and Diligent MERN Stack Developer with specialization in
      various popular web technologies.Being an avid learner, I am highly
      adaptable and attentive to detail.
      I'm Aman Kohare From Khargone pursuing Bachelor of Technology (B.Tech)
       in the field of Information technology from Barkatullah University Bhopal. 
       I have done my 12th form G.B.H.S.S karhi (khargone) with 55%.
       My hobby is playing Cricket And my AIM to become Full-stake developer.
      </p>

      <p>
        <span className="italic">I'm self taught programmer</span>, Who wants to explore the world
         of this decent and freaky technology.{" "}
        <span className="font-medium">i am </span>. creative and passionate about design and technology
      </p>
    </motion.section>
  );
}
