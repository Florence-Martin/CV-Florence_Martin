import Image from "next/image";
import { useTranslation } from "react-i18next";

const Profil: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold">Florence Martin</h1>
      <p className="text-center  text-lg"> {t("developper")}</p>
      <p className="text-center  text-lg mb-4">UX/UI - Product Owner</p>
      <Image
        src="/assets/images/PhotoFloM.png"
        alt="Profile photo"
        width={120}
        height={120}
        className="rounded-lg mx-auto"
      />

      <p className="mt-4 text-justify">{t("profil")}</p>
    </div>
  );
};

export default Profil;
