import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function MoreBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[10rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-white hover:text-gray-50"></div>
      ) : (
        <a href="https://github.com/Amankohare0514">
             MoreProjects{" "}
        </a>
      )}
    </button>
  );
}
