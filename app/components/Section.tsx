import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Section;
