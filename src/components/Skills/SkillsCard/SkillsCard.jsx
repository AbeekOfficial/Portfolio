// components/SkillsCard.js
import React from "react";
import Image from "next/image";

export default function SkillsCard({ icon, isActive, title, alt, onClick }) {
  return (
    <div
      className={`skills-card text-center p-3 border-2 rounded-2xl transition .3s ease-in cursor-pointer backdrop:blur(1rem) border-[#6751b9] hover:bg-[#8e44aa] ${
        isActive ? "active" : ""
      }`}
      onClick={() => onClick()}
    >
      <div className="skill-icon justify-center flex">
        <Image src={icon} alt={alt} width={80} height={80} />
      </div>
      <h4 className="font-medium">{title}</h4>
    </div>
  );
}
