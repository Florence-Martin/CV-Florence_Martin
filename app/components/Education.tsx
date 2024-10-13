import { PiStudentLight } from "react-icons/pi";

const Education: React.FC = () => {
  return (
    <div
      id="education"
      className="bg-background text-foreground p-6 rounded-lg "
    >
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <PiStudentLight className="mr-2" /> FORMATION
        </h2>
      </div>
      <div className="relative pl-8">
        {/* Ligne verticale */}
        <div className="absolute left-2 top-1.5 bottom-0 w-0.5 bg-[var(--line-color)]"></div>

        <ul className="space-y-8">
          {/* Élément 1 */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>2023 - 2024 :</strong> Conception Développeuse
              d&apos;Applications
              <ul className="list-disc pl-5">
                <li>
                  Titre CDA niveau 6 (09-2024) - Certification DevOps (10-2024)
                </li>
                <li>Simplon - en alternance avec la société Ingeli</li>
              </ul>
            </div>
          </li>

          {/* Élément 2 */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>2021 - 2022 :</strong> Développeuse Web & Web mobile
              <ul className="list-disc pl-5">
                <li>Wild Code School</li>
              </ul>
            </div>
          </li>

          {/* Élément 3 */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6">
              <strong>2017 - 2019 :</strong> Réflexologue
            </div>
          </li>

          {/* Élément 4 */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6">
              <strong>1988 - 1990 :</strong> Ergothérapeute
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
