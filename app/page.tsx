"use client";

import { useEffect, useState } from "react";
import Profile from "../app/components/Profil";
import Contact from "../app/components/Contact";
import SoftSkills from "../app/components/SoftSkills";
import Interests from "../app/components/Interests";
import SocialLinks from "../app/components/SocialLinks";
import Education from "../app/components/Education";
import Experiences from "../app/components/Experiences";
import Skills from "../app/components/Skills";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Evite le rendu côté serveur pour le thème

  return (
    <div className="relative w-screen h-screen">
      <div className="fixed top-0 left-0 w-52 h-96 bg-blue-600 rounded-br-lg"></div>
      <div className="fixed bottom-0 right-0 w-52 h-96 bg-blue-600 rounded-tl-lg"></div>

      <div>
        <header className="flex justify-end px-3">
          {/* Bouton de changement de thème */}
          <button
            className="rounded-full px-1 py-1 md:px-4 md:py-4 text-sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <FiSun className="text-yellow-400" size={24} />
            ) : (
              <FiMoon className="text-gray-800" size={24} />
            )}
          </button>
        </header>

        {/* Menu mobile visible seulement sur petits écrans */}
        <nav className="flex justify-around py-2 bg-blue-600 text-white sm:hidden">
          <Link href="#education" className="z-30 hover:underline">
            Formation
          </Link>
          <Link href="#experiences" className="z-30 hover:underline">
            Experience
          </Link>
          <Link href="#skills" className="z-30 hover:underline">
            Compétence
          </Link>
        </nav>

        <main className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full px-3 md:px-10 ">
          {/* Sidebar sur la gauche */}
          <aside className="z-20 space-y-6 md:col-span-1">
            <Profile />
            <Contact />
            <SocialLinks />
            <SoftSkills />
            <Interests />
          </aside>

          {/* Contenu principal sur la droite */}
          <section className="z-20 space-y-6 md:col-span-3">
            <Education />
            <Experiences />
            <Skills />
          </section>
        </main>
      </div>
    </div>
  );
}
