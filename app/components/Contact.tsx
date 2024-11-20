import { useTranslation } from "react-i18next";
import { FaHome, FaPhone, FaEnvelope, FaLanguage } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Contact: React.FC = () => {
  const { t } = useTranslation("common");

  const contactDetails = [
    { icon: FaHome, label: "Localisation", value: "Lyon - 69004 - France" },
    { icon: FaPhone, label: "Téléphone", value: "+33 (0)6 81 14 24 55" },
    { icon: FaEnvelope, label: "Email", value: "florence.martin469@gmail.com" },
    { icon: FaLanguage, label: "Langues", value: t("language") },
  ];

  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <FiUser className="mr-2 text-xl" />
        <h2 className="text-xl font-semibold pl-2">CONTACT</h2>
      </div>

      <div className="space-y-4">
        {contactDetails.map(({ icon: Icon, label, value }, index) => (
          <div
            key={index}
            className="flex items-start flex-nowrap md:flex-wrap"
          >
            <Icon className="mr-2 text-xl" />
            <div className="mx-4 h-6 border-l-2 border-gray-300"></div>
            <div className="flex justify-between w-full md:w-auto flex-grow border-b-2 border-gray-300 pb-2">
              <span className="hidden lg:block">{label}</span>
              <span className="text-right md:ml-auto">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
