import { PiCodeThin } from "react-icons/pi";

const Skills: React.FC = () => {
  return (
    <div id="skills" className="bg-background text-foreground p-6 rounded-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-2xl font-semibold flex items-center">
          <PiCodeThin className="mr-2" />
          COMPETENCES TECHNOS
        </h2>
      </div>
      <div className="relative pl-8">
        {/* Ligne verticale */}
        <div className="absolute left-2.5 top-1.5 bottom-0 w-0.5 bg-[var(--line-color)]"></div>

        <ul className="space-y-2">
          {/* Langages et frameworks */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>Langages et frameworks</strong>
              <p>
                HTML, CSS, SCSS, Tailwind, React, Next.js, Typescript, React
                Native, Node, Express
              </p>
            </div>
          </li>

          {/* Bases de données */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>Bases de données</strong>
              <p>MySQL, PostgreSQL</p>
            </div>
          </li>

          {/* Outils DevOps */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>Outils DevOps</strong>
              <p>CI/CD, Docker, Docker-compose, GitHub Actions</p>
            </div>
          </li>

          {/* Design */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>Design</strong>
              <p>Figma, Illustrator, UX/UI, WordPress</p>
            </div>
          </li>

          {/* Gestion de projet */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>Gestion de projet</strong>
              <p>Jira, Confluence, Trello, Méthodologie Agile/Scrum</p>
            </div>
          </li>

          {/* Outils supplémentaires */}
          <li className="relative -ml-7">
            <div className="absolute left-0 top-1 w-3 h-3 bg-[var(--point-color)] rounded-full"></div>
            <div className="ml-6 text-lg">
              <strong>Outils supplémentaires</strong>
              <p>Notion, WebStorm, StarUML, Looping, JMerise</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
