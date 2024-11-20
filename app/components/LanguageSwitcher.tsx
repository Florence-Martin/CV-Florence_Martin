"use client";
import { Languages } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Récupérer le mode actuel (dark ou light)
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref pour le conteneur du menu
  const { t } = useTranslation("common");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Fermer le menu après le changement
  };

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative z-50">
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-transparent rounded-full text-black dark:text-white hover:bg-blue-200 dark:hover:bg-gray-700"
      >
        <Languages
          className={` ${
            theme === "dark" ? "text-white" : "text-black hover:text-white"
          }`}
        />
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <button
            className="w-full px-4 py-2 text-left hover:bg-blue-100 text-blue-600 dark:hover:bg-gray-600 dark:text-gray-300"
            onClick={() => changeLanguage("fr")}
          >
            {t("native-language")}
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-blue-100 text-blue-600 dark:hover:bg-gray-600 dark:text-gray-300"
            onClick={() => changeLanguage("en")}
          >
            {t("additional-language")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
