// components/SkillsCardInfo.js
import React from "react";

export default function SkillsCardInfo({ heading, skills, className }) {
  return (
    <div className="w-[650px] h-[430px] p-5 border-[#382e68] rounded-xl border-2">
      <h4 className="text-center text-2xl mt-2 bg-[#382e68] mb-7 text-[#dd8cfa] p-2 rounded-xl font-semibold">
        {heading}
      </h4>
      <ul className="mt-8">
        {skills.map((skill, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="text-[17px] mb-5 font-medium pr-3">
              {skill.skill}
            </div>
            <div className="w-[100%] h-3 rounded-md border-2 border-[#382e68] bg-[#382e68] overflow-hidden">
              <div
                style={{ width: skill.percentage }}
                className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 h-screen transition-all duration-500 ease-in"
              ></div>
            </div>
            <span className="text-[#dd8cfa] font-medium pl-3">
              {skill.percentage}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
