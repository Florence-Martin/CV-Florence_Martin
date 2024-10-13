import Image from "next/image";

const Profil: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold">Florence Martin</h1>
      <p className="text-center  text-lg">Développeuse</p>
      <p className="text-center  text-lg mb-4">UX/UI - Product Owner</p>
      <Image
        src="/assets/images/PhotoFloM.png"
        alt="Profile photo"
        width={120}
        height={120}
        className="rounded-lg mx-auto"
      />

      <p className="mt-4 text-justify">
        Conceptrice Développeuse d’Applications certifiée DevOps, avec une
        expérience en front-end et en gestion de projets. Spécialisée dans la
        création d’interfaces ergonomiques UX/UI et réactives (React, Next.js),
        j’optimise les processus de développement en environnement agile. Mon
        expertise me permet de collaborer efficacement avec des équipes
        multidisciplinaires et de garantir une gestion fluide des priorités et
        objectifs produits.
      </p>
    </div>
  );
};

export default Profil;
