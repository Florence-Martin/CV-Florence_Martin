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
          EXPERIENCE PROFESSIONNELLE
        </h2>
      </div>

      <div className="relative pl-8">
        <div className="absolute left-2 top-1.5 bottom-0 w-0.5 bg-[var(--line-color)]"></div>
        <ul className="space-y-8">
          <ExperienceItem
            yearRange="2023 - 2024"
            title="Conception Développeuse d'Applications"
            company="Ingeli"
            location="Brignais (69)"
            technology="C# | MongoDB | SCSS | DevOps"
            details={[
              "Développement d’IHM pour applications industrielles en IoT",
              "Création et intégration de composants UX/UI Design",
              "Conception de templates emailing et ergonomie des interfaces utilisateurs",
              "Environnement DevOps",
            ]}
          />
          <ExperienceItem
            yearRange="2021 - 2022"
            title="Développeuse Web & Web mobile"
            company="NumeriCité"
            location="Paris/Lyon"
            technology="React | CSS"
            details={[
              "Participation à des projets de transformation numérique : intégration front-end, création de maquettes UX/UI",
              "Réalisation d’interfaces graphiques (maquettes, intégration) et amélioration de l’ergonomie des sites web",
            ]}
          />
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6">
              <strong className="text-lg">Parcours avant reconversion</strong>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <strong>2017 - 2021 </strong>| Réflexologue indépendante
                </li>
                <li>
                  <strong>2013 - 2018 </strong>| Spot Objectivement - admin. des
                  ventes B to B - Objets publicitaires
                </li>
                <li>
                  <strong>2002 - 2013 </strong>| TS Compack - gérante de société
                  B to B - Fabricant textiles compactés
                </li>
                <li>
                  <strong>1999 - 2002 </strong>| ATP - admin. des ventes /
                  relation clientèle B to B - Objets publicitaires - Bijouterie
                </li>
                <li>
                  <strong>1992 - 1998</strong> | Florence Avril - gérante de
                  société B to B - Fabricant Bijouterie / Joaillerie
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
