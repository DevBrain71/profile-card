import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "Intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "Beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "Beginner",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    level: "Advanced",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="body">
      <img src="pexels-bess-hamiti-36487.jpg" alt="" className="head-image" />
      <p className="header-name">Olumide Abai</p>
      <p className="description">
        A student developer, also an aspiring software engineer who is currently
        pursuing academic studies while honing my coding skills. I am passionate
        about learning new technologies, building projects, and solving
        real-world problems through programming. Balancing coursework with
        self-initiated coding challenges, I actively participate in hackathons,
        coding competitions, and contribute to open-source projects.
      </p>
      <ul className="skill-card-container">
        {skills.map((skill) => (
          <SkillCard skillCard={skill} key={skill.skill} />
        ))}

        {/* <SkillCard
          skill="HTML + CSS 💪"
          class="skill-card"
          color={{ backgroundColor: "blue" }}
        /> */}
      </ul>
    </div>
  );
}

function SkillCard({ skillCard }) {
  const level =
    skillCard.level === "Beginner"
      ? "👶"
      : null || skillCard.level === "Intermediate"
      ? "👍"
      : null || skillCard.level === "Advanced"
      ? "💪"
      : null;
  return (
    <li style={{ backgroundColor: skillCard.color }} className="skill-card">
      {skillCard.skill} <span>{level}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
