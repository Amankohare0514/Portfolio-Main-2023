"use client";
import Giscus from '@giscus/react';
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div>
        <SectionHeading>Contact me</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
          I'm always open to chat, so please don't hesitate contacting me!{" "}
          <a className="underline" href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            amankohare@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("thanks for message!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="your gmail"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
        <div>
          <div className="mx-auto p-6 mt-10 bg-white rounded-md shadow-md mb-2">
            <h2 className="text-2xl font-semibold mb-4 dark:text-black">Comment Section</h2>
            <p className="text-gray-700 mb-4">
              Thank you for taking the time to explore my work. Your feedback is valuable to me.
            </p>
            <p className="text-gray-700 mb-4">
              Please log in with your GitHub account to leave a comment. Your insights contribute to the continuous improvement of my projects. Thank you!
            </p>
          </div>
          <Giscus
            id="comments"
            repo="amankohare0514/Portfolio-Main-2023"
            repoId="R_kgDOKNLJ9A"
            category="Announcements"
            categoryId="DIC_kwDOKNLJ9M4Ca70G"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
          />
        </div>
      </div>
    </motion.section>
  );
}
