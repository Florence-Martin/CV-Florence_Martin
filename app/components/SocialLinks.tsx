import { FaLinkedin, FaGithub, FaBookOpen } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://portfolio-florence-martin.vercel.app/",
    icon: <FaBookOpen className="mr-2 text-xl" />,
    label: "Portfolio",
  },
  {
    href: "https://www.linkedin.com/in/florence-martin-922b3861/",
    icon: <FaLinkedin className="mr-2 text-xl" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Florence-Martin",
    icon: <FaGithub className="mr-2 text-xl" />,
    label: "GitHub",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <ul className="space-y-2">
        {socialLinks.map((link, index) => (
          <li key={index} className="flex items-center">
            {link.icon}
            <a
              href={link.href}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
