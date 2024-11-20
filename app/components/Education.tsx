import { useTranslation } from "react-i18next";
import { PiStudentLight } from "react-icons/pi";

interface EducationItem {
  yearRange: string;
  title: string;
  details?: string[];
}

const Education: React.FC = () => {
  const { t } = useTranslation("common");

  // Données extraites depuis le fichier JSON avec t()
  const educationData = t("educationData.items", {
    returnObjects: true,
  }) as EducationItem[];

  return (
    <div
      id="education"
      className="bg-background text-foreground p-6 rounded-lg"
    >
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <div className="mr-2">
            <PiStudentLight />
          </div>
          {t("formation")}
        </h2>
      </div>
      <div className="relative pl-8">
        <div className="absolute left-2 top-1.5 bottom-0 w-0.5 bg-[var(--line-color)]"></div>
        <ul className="space-y-8">
          {educationData.map((item, index) => (
            <li key={index} className="relative -ml-7">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
              <div className="ml-6 text-lg">
                <strong>{item.yearRange} :</strong> {t(item.title)}
                {item.details && (
                  <ul className="list-disc pl-5">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{t(detail)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
