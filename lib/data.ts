import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import imdb from "@/public/imdb.png";
import blogs from "@/public/blogs.png"
import reform from "@/public/reform.png"

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
      "complete my secondary school from Govt.Boys.H.S.School Karhi-Padliya, Dist Khargone(mp)",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Class 12th",
    location: "Khargone(mp)",
    description:
    "complete my higher secondary school from Govt.Boys.H.S.School Karhi-Padliya, Dist Khargone(mp)",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "B.tech (It)",
    location: "Bhopal",
    description:
      "Currently i'm pursuing Bechlor of technology from Barkatullah University Bhopal |current Year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "IMDB-clone",
    description:
      "Recently i've created IMDB clone which show upcoming movies and popular movie and top rated movie.",
    tags: ["React", "Tailwind", "React-Router-dom" , "API"],
    imageUrl: imdb,
  },
  {
    title: "Reform",
    description:
      "Using Reform you can create and share form easily with beautiful webflow prototype feature",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma" ,"Shadcn UI" ,"Vercel PostgreSQL"],
    imageUrl: reform,
  },
  {
    title: "Snax Blogs",
    description:
      "Led the development of Snax Blog, a feature-rich blogging website that allows users to create and manage their blogs",
    tags: ["mongoDB", "React.js", "express.js" , "node.js", "Tailwind"],
    imageUrl: blogs,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Github",
  "Tailwind",
  "MongoDB",
  "Redux",
  "C++",
  "DSA",
  "React-Native",
  "Vs code",
  "Linux",
  "Netlify/vercel"
] as const;
