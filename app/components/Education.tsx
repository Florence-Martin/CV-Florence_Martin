import { PiStudentLight } from "react-icons/pi";

interface EducationItem {
  yearRange: string;
  title: string;
  details?: string[];
}

const educationData: EducationItem[] = [
  {
    yearRange: "2023 - 2024",
    title: "Conception Développeuse d'Applications",
    details: [
      "Titre CDA niveau 6 (09-2024) - Certification DevOps (10-2024)",
      "Simplon - en alternance avec la société Ingeli",
    ],
  },
  {
    yearRange: "2021 - 2022",
    title: "Développeuse Web & Web mobile",
    details: ["Wild Code School"],
  },
  {
    yearRange: "2017 - 2019",
    title: "Réflexologue",
  },
  {
    yearRange: "1988 - 1990",
    title: "Ergothérapeute",
  },
];

const Education: React.FC = () => {
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
          FORMATION
        </h2>
      </div>
      <div className="relative pl-8">
        <div className="absolute left-2 top-1.5 bottom-0 w-0.5 bg-[var(--line-color)]"></div>
        <ul className="space-y-8">
          {educationData.map((item, index) => (
            <li key={index} className="relative -ml-7">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
              <div className="ml-6 text-lg">
                <strong>{item.yearRange} :</strong> {item.title}
                {item.details && (
                  <ul className="list-disc pl-5">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
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
