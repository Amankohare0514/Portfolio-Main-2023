import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import imdb from "@/public/imdb.png";
import ecommerce from "@/public/ecommerce.png"
import portfolio from "@/public/portfolio.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Class 10th",
    location: "Khargone(mp)",
    description:
      "complete my secondary school from Govt.Boys.H.S.School Karhi-Padliya Dist Khargone(mp) | 63%",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Class 12th",
    location: "Khargone(mp)",
    description:
    "complete my higher secondary school from Govt.Boys.H.S.School Karhi-Padliya Dist Khargone(mp) | 55%",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "B.tech (It)",
    location: "Bhopal",
    description:
      "Currently i'm pursuing bechlor of technology from Barkatullah University Bhopal | 8.0/10 in current Year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "IMDB-clone",
    description:
      "Recently i've created IMDB clone which show upcoming movies and popular movie and top rated movie.",
    tags: ["React", "Tailwind", "React-Router-dom"],
    imageUrl: imdb,
  },
  {
    title: "E-commerce websites",
    description:
      "E-commerce websites have evolved from basic online storefronts to sophisticated platforms that incorporate cutting-edge technologies.",
    tags: ["React", "TypeScript", "Tailwind", "Redux" ,"State"],
    imageUrl: ecommerce,
  },
  {
    title: "Portfolio",
    description:
      "I've created my portfolio using html and css and js, which show my all informmation ",
    tags: ["html", "css", "javaScript" , "bootstarp", ],
    imageUrl: portfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "C++",
  "DSA",
  "React-Native",
  "Vs code",
  "Linux",
  "Netlify/vercel"
] as const;
