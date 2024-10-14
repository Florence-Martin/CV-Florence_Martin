import React from "react";

const skills = [
  "Esprit d'équipe",
  "Adaptabilité, Curiosité",
  "Résilience, Orientation résultats",
  "Empathie, Aisance relationnelle",
  "Autonomie, Tenacité, Organisation",
];

const SoftSkills: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-xl font-semibold">SAVOIR-ETRE</h2>
      </div>
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoftSkills;
