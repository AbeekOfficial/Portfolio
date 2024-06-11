// components/Skills.js
import React, { useState } from "react";
import SkillsCard from "./SkillsCard/SkillsCard";
import SkillsCardInfo from "./SkillsCardInfo";
import dataSkill from "@/utils/data";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(dataSkill[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section>
      <h3 className="font-semibold text-2xl text-center mt-12 mb-12">
        Technical Proficiency
      </h3>
      <div className="skills-content flex justify-between">
        <div className="skills h-full bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 w-96 p-2 flex flex-col gap-3 rounded-2xl">
          {dataSkill.map((e) => (
            <SkillsCard
              key={e.title}
              icon={e.icon}
              title={e.title}
              alt={e.title}
              isActive={selectedSkill.title === e.title}
              onClick={() => handleSelectedSkill(e)}
            />
          ))}
        </div>
        <div className="skills-info">
          {handleSelectedSkill ? (
            <SkillsCardInfo
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
