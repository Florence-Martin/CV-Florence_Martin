import { FaHome, FaPhone, FaEnvelope, FaLanguage } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      {/* Titre avec l'icône de l'utilisateur */}
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <FiUser className="mr-2 text-xl" />
        <h2 className="text-xl font-semibold pl-2">CONTACT</h2>
      </div>

      {/* Informations de contact */}
      <div className="space-y-4">
        <div className="flex items-start flex-nowrap md:flex-wrap">
          <FaHome className="mr-2 text-xl" />
          <div className="mx-4 h-6 border-l-2 border-gray-300"></div>
          <div className="flex justify-between w-full md:w-auto flex-grow border-b-2 border-gray-300 pb-2">
            <span className="hidden lg:block">Localisation</span>
            <span className="text-right md:ml-auto">Lyon - 69004</span>
          </div>
        </div>

        <div className="flex items-start flex-nowrap md:flex-wrap">
          <FaPhone className="mr-2 text-xl" />
          <div className="mx-4 h-6 border-l-2 border-gray-300"></div>
          <div className="flex justify-between w-full md:w-auto flex-grow border-b-2 border-gray-300 pb-2">
            <span className="hidden lg:block">Téléphone</span>
            <span className="text-right md:ml-auto">06 81 14 24 55</span>
          </div>
        </div>

        <div className="flex items-start flex-nowrap md:flex-wrap">
          <FaEnvelope className="mr-2 text-xl" />
          <div className="mx-4 h-6 border-l-2 border-gray-300"></div>
          <div className="flex justify-between w-full md:w-auto flex-grow border-b-2 border-gray-300 pb-2">
            <span className="hidden lg:block">Email</span>
            <span className="text-right md:ml-auto">
              florence.martin469@gmail.com
            </span>
          </div>
        </div>

        <div className="flex items-start flex-nowrap md:flex-wrap">
          <FaLanguage className="mr-2 text-xl" />
          <div className="mx-4 h-6 border-l-2 border-gray-300"></div>
          <div className="flex justify-between w-full md:w-auto flex-grow border-b-2 border-gray-300 pb-2">
            <span className="hidden lg:block">Langues</span>
            <span className="text-right md:ml-auto">Anglais</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
