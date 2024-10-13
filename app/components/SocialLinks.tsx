import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importation des icônes

const SocialLinks: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <ul className="space-y-2">
        <li className="flex items-center">
          <FaLinkedin className="mr-2 text-xl" />
          <a
            href="https://www.linkedin.com/in/florence-martin-922b3861/"
            className=" hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center">
          <FaGithub className="mr-2 text-xl" />
          <a
            href="https://github.com/Florence-Martin"
            className=" hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
