const Interests: React.FC = () => {
  return (
    <div className="bg-background text-foreground p-6 rounded-lg shadow-lg">
      <div className="flex items-center border-t-2 border-b-2 py-1 border-gray-400 mb-4">
        <h2 className="text-xl font-semibold pl-2">CENTRES D&apos;INTERETS</h2>
      </div>
      <ul className="list-none space-y-2">
        <li>Voyages</li>
        <li>Ski - Montagne</li>
        <li>Cinéma</li>
        <li>Musique</li>
      </ul>
    </div>
  );
};

export default Interests;
