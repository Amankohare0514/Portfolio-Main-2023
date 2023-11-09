import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import student from "@/public/student.png";
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
    location: "Khargone(Mp)",
    description:
      "complete my secondary school from Govt.Boys.H.S.School Karhi-Padliya, Dist Khargone(mp)",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Class 12th",
    location: "Khargone(Mp)",
    description:
    "complete my higher secondary school from Govt.Boys.H.S.School Karhi-Padliya, Dist Khargone(mp)",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "B.tech (IT)",
    location: "Bhopal(Mp)",
    description:
      "Currently i'm pursuing Bechlor of technology from Barkatullah University Bhopal |current Year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Student Management System",
    description:
      "Developed the front-end of a comprehensive Student Management System, resulting in an intuitive",
    tags: ["React", "Tailwind", "Redux" , "API"],
    imageUrl: student,
    link: "https://github.com/Amankohare0514/Student_Management-System",
  },
  {
    title: "Reform",
    description:
      "Using Reform you can create and share form easily with beautiful webflow prototype feature",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma" ,"Shadcn UI" ,"Vercel PostgreSQL"],
    imageUrl: reform,
    link: "https://github.com/Amankohare0514/Reform",
  },
  {
    title: "Snax Blogs",
    description:
      "Led the development of Snax Blog, a feature-rich blogging website that allows users to create and manage their blogs",
    tags: ["mongoDB", "React.js", "express.js" , "node.js", "Tailwind"],
    imageUrl: blogs,
    link: "https://github.com/Amankohare0514/full-stack-front-end",
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
