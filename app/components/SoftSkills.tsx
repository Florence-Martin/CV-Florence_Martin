import React from "react";
import { useTranslation } from "react-i18next";

const SoftSkills: React.FC = () => {
  const { t } = useTranslation("common");

  const skills = [
    t("skills.teamwork"),
    t("skills.adaptability_curiosity"),
    t("skills.resilience_results_oriented"),
    t("skills.empathy_relationships"),
    t("skills.autonomy_tenacity_organization"),
  ];
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-xl font-semibold">{t("soft-skills")}</h2>
      </div>
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoftSkills;
