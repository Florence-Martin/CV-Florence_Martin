import { useTranslation } from "react-i18next";
import { PiBriefcaseThin } from "react-icons/pi";

interface ExperienceItemProps {
  yearRange: string;
  title: string;
  company: string;
  location: string;
  technology: string;
  details: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  yearRange,
  title,
  company,
  location,
  technology,
  details,
}) => (
  <li className="relative -ml-7">
    <div className="absolute left-0 top-1.5 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
    <div className="ml-6 text-lg">
      <strong>
        {yearRange} - {title}
      </strong>
      <span className="block text-gray-400">
        {company} - {location} - Technos: {technology}
      </span>
      <ul className="list-disc list-inside space-y-1 mt-2">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  </li>
);

const Experiences: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <div
      id="experiences"
      className="bg-background text-foreground p-6 rounded-lg"
    >
      <div className="flex items-center border-t-2 border-b-2 py-1 border-[#414042] mb-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <div className="mr-2">
            <PiBriefcaseThin />
          </div>
          {t("work-experience")}
        </h2>
      </div>

      <div className="relative pl-8">
        <div className="absolute left-2 top-1.5 bottom-0 w-0.5 bg-[var(--line-color)]"></div>
        <ul className="space-y-8">
          <ExperienceItem
            yearRange="2023 - 2024"
            title={t("experience.developer_applications")}
            company={t("experience.ingeli")}
            location="Brignais (69)"
            technology="C# | MongoDB | SCSS | DevOps"
            details={[
              t("experience.details.iot"),
              t("experience.details.ux_ui_design"),
              t("experience.details.email_templates"),
              t("experience.details.devops"),
            ]}
          />
          <ExperienceItem
            yearRange="2021 - 2022"
            title={t("experience.developer_web_mobile")}
            company={t("experience.numericite")}
            location="Paris/Lyon"
            technology="React | CSS"
            details={[
              t("experience.details.numericite_ux_ui"),
              t("experience.details.numericite_graphics"),
            ]}
          />
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6">
              <strong className="text-lg">
                {t("experience.previous_career")}
              </strong>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>2017 - 2021 </strong>| {t("experience.reflexologist")}
                </li>
                <li>
                  <strong>2013 - 2018 </strong>| Spot Objectivement -{" "}
                  {t("experience.sales_admin")}
                </li>
                <li>
                  <strong>2002 - 2013 </strong>| TS Compack -{" "}
                  {t("experience.business_manager")}
                </li>
                <li>
                  <strong>1999 - 2002 </strong>| ATP -{" "}
                  {t("experience.client_relationship")}
                </li>
                <li>
                  <strong>1992 - 1998</strong> | Florence Avril -{" "}
                  {t("experience.jewelry_manager")}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
