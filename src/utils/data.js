import frontend from "../../public/frontend.png";
import soft from "../../public/soft.png";
import tools from "../../public/tools.png";

const dataSkill = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3 (Sass/Tailwind/Bootstrap)", percentage: "75%" },
      { skill: "JavaScript (TypeScript)", percentage: "70%" },
      { skill: "ReactJS (NextJS)", percentage: "70%" },
      { skill: "Redux (Redux toolkit)", percentage: "65%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      {
        skill: "Git (Github)",
        percentage: "65%",
      },
      {
        skill: "Visual Studio",
        percentage: "75%",
      },
      {
        skill: "Terminal",
        percentage: "30%",
      },
    ],
  },
  {
    title: "Soft skills",
    icon: soft,
    skills: [
      {
        skill: "Problem solving",
        percentage: "65%",
      },
      {
        skill: "Collaboration",
        percentage: "65%",
      },
      {
        skill: "Attention to Detail",
        percentage: "80%",
      },
    ],
  },
];

export default dataSkill;
