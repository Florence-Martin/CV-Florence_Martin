import { useTranslation } from "react-i18next";
import { PiCodeThin } from "react-icons/pi";

const skillsData = [
  {
    categoryKey: "skills.categories.languages_frameworks",
    detailsKey: "skills.details.languages_frameworks",
  },
  {
    categoryKey: "skills.categories.databases",
    detailsKey: "skills.details.databases",
  },
  {
    categoryKey: "skills.categories.devops_tools",
    detailsKey: "skills.details.devops_tools",
  },
  {
    categoryKey: "skills.categories.design",
    detailsKey: "skills.details.design",
  },
  {
    categoryKey: "skills.categories.project_management",
    detailsKey: "skills.details.project_management",
  },
  {
    categoryKey: "skills.categories.additional_tools",
    detailsKey: "skills.details.additional_tools",
  },
];

const Skills: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div id="skills" className="bg-background text-foreground p-6 rounded-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <div className="mr-2">
            <PiCodeThin />
          </div>
          {t("technical-skills")}
        </h2>
      </div>
      <div className="relative pl-8">
        {/* Ligne verticale */}
        <div className="absolute left-2.5 top-1.5 bottom-0 w-0.5 bg-[var(--line-color)]"></div>

        <ul className="space-y-2">
          {skillsData.map((skill, index) => (
            <li key={index} className="relative -ml-7">
              <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
              <div className="ml-6 text-lg">
                <strong>{t(skill.categoryKey)}</strong>
                <p>{t(skill.detailsKey)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
