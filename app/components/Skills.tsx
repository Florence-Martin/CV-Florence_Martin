import { PiCodeThin } from "react-icons/pi";

const skillsData = [
  {
    category: "Langages et frameworks",
    details:
      "HTML, CSS, SCSS, Tailwind, React, Next.js, Typescript, React Native, Node, Express",
  },
  {
    category: "Bases de données",
    details: "MySQL, PostgreSQL",
  },
  {
    category: "Outils DevOps",
    details: "CI/CD, Docker, Docker-compose, GitHub Actions",
  },
  {
    category: "Design",
    details: "Figma, Illustrator, UX/UI, WordPress",
  },
  {
    category: "Gestion de projet",
    details: "Jira, Confluence, Trello, Méthodologie Agile/Scrum",
  },
  {
    category: "Outils supplémentaires",
    details: "Notion, WebStorm, StarUML, Looping, JMerise",
  },
];

const Skills: React.FC = () => {
  return (
    <div id="skills" className="bg-background text-foreground p-6 rounded-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <div className="mr-2">
            <PiCodeThin />
          </div>
          COMPETENCES TECHNOS
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
                <strong>{skill.category}</strong>
                <p>{skill.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
