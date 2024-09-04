import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <div className="skill-card-container">
        <SkillCard
          skill="HTML + CSS 💪"
          class="skill-card"
          bg={{ backgroundColor: "blue" }}
        />
        <SkillCard
          skill="JavaScript 👍"
          class="skill-card"
          bg={{ backgroundColor: "yellow" }}
        />
        <SkillCard
          skill="Web Design 💪"
          class="skill-card"
          bg={{ backgroundColor: "aquamarine" }}
        />
        <SkillCard
          skill="Git and GitHub 👍"
          class="skill-card"
          bg={{ backgroundColor: "red" }}
        />
        <SkillCard
          skill="react 👶"
          class="skill-card"
          bg={{ backgroundColor: "cadetblue" }}
        />
        <SkillCard
          skill="Python 👍"
          class="skill-card"
          bg={{ backgroundColor: "orange" }}
        />
      </div>
    </div>
  );
}

function SkillCard(props) {
  return (
    <div style={props.bg} className={props.class}>
      {props.skill}
    </div>
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
