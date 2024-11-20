"use client";
import { Languages } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Fermer le menu après le changement
  };

  return (
    <div className="relative z-50">
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2  text-black rounded-full hover:bg-blue-200"
      >
        <span>
          <Languages />
        </span>
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg">
          <button
            className="w-full px-4 py-2 text-left hover:bg-blue-100 text-blue-600"
            onClick={() => changeLanguage("fr")}
          >
            Français
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-blue-100 text-blue-600"
            onClick={() => changeLanguage("en")}
          >
            Anglais
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
