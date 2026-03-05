"use client";
import { useState } from "react";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);

  function Btn() {
    setIsOpen(prevOpen => !prevOpen)
  }
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">FAQ</h1>
      <section className=""> 
        <button className=""></button>
        {
          isOpen && (
            <>
            </>
          )
        }
      </section>
    </div>
  );
}