const SoftSkills: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-xl font-semibold">SAVOIR-ETRE</h2>
      </div>
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>Esprit d&apos;équipe</li>
          <li>Adaptabilité, Curiosité</li>
          <li>Résilience, Orientation résultats</li>
          <li>Empathie, Aisance relationnelle</li>
          <li>Autonomie, Tenacité, Organisation</li>
        </ul>
      </div>
    </div>
  );
};

export default SoftSkills;
