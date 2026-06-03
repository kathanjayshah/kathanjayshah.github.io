import "./body.css";

import BugReportIcon from "@mui/icons-material/BugReport";
import { useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import kathan from "../../Assets/kathan34.JPG";
import js from "../../Assets/js.png";
import java from "../../Assets/java.png";
import cplusplus from "../../Assets/cplusplus.png";
import angular from "../../Assets/Angular.svg.png";
import css from "../../Assets/css.png";
import gitpic from "../../Assets/git.png";
import html from "../../Assets/html.png";
import python from "../../Assets/python.png";
import reactpic from "../../Assets/react.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Work from "../timeline/timelineCmpt";

function Body() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  /*
  const projectCard = [
    {
      title: "Ricochet Robots",
      subheader: "2D-Game",
      img: require("../../Assets/board.png"),
      language: "Language: Java",
      detail:
        'A simple implementation of Alex Randolph\'s board game Ricochet Robots including solver. This game is witten in JAVA. Where I learned some of the major algorithms in Computer science, one of such is "Find and hunt" algorithum. Over this I built an AI that can give the solution of the puzzle. The most intresting part was to learn how to build the GUI and the "back-end" supporting it. All the updates were done periodically in 4 different Iteration. This Project is hosted on Github, which leads me to learn the version control language, git. The whole design was created by me and all the code was led by me.',
      software: "Software: Eclipse, IntelliJ.",
      hosted: "Hosted: Github",
      git: "https://github.com/djgrillopena/comp2005-winter20-group11",
    },
    {
      title: "Sudoko Solver",
      subheader: "2D-Game Solver",
      img: require("../../Assets/Sudoko.png"),
      language: "Language: Python",
      detail:
        'A graphical interface game of Sudoko. I have built an solver for the puzzle, which works on "BACK Tracking algorithm". It was a fun side project. I used the backtracking algorithm in this solver because if we try to find each and every solution and try to see if it works then it will take forever. So, by doing some research and talking to some of my seniors, i used the back tracking algorithum. This Project is an product of the bigger project like Richochet Robots. The management skills that i learned from the previous project encouraged me to built this one.',
      software: "Software: PyCharm, Idel.",
      hosted: "Hosted: Github",
      git: "https://github.com/kathanjayshah/Sudoku/tree/master",
    },
  ];
  const getCard = projectCard.map((cd) => {
    return (
      <MediaCard
        title={cd.title}
        subheader={cd.subheader}
        img={cd.img}
        language={cd.language}
        detail={cd.detail}
        software={cd.software}
        hosted={cd.hosted}
        git={cd.git}
      />
    );
  });*/

  return (
    <div className="body">
      <div className="body1">
        <div className="discription">
          <div className="helloWorld"></div>
          <h1>
            &lt;Hello World! &gt; <br /> I'm{" "}
            <span style={{ color: "#1976d2" }}>Kathan</span> Shah
          </h1>
          <div className="developer">
            <BugReportIcon />
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="body2">
        <h3 onClick={handleClick}>
          {!active ? (
            <span>"આ સમય પણ વહી જશે"</span>
          ) : (
            <span>"This time shall pass too"</span>
          )}
          <GTranslateIcon className="translate" />
        </h3>
        <p> - Narendra Lalchand Shah(Grandfather)</p>
      </div>

      <div id="Experience" className="body3">
        <h1>Work Experience</h1>
        <Work work={true} />
      </div>
      <div id="Education" className="body4">
        <h1>Education</h1>
        <Work education={true} />
      </div>
      <div id="About" className="body6">
        <div className="about">
          <h1>About Me</h1>
          <p>
            I am a Software Developer who loves
            building things that make a real impact.
          </p>
          <p>
            My goal is to challenge myself every day with new problems so I can
            grow into a better engineer with each one I solve.
          </p>
          <p>
            Outside of work, I spend most of my time learning and exploring new
            concepts. Lately, I have been focused on designing data-intensive
            applications, sharpening my problem-solving skills through LeetCode,
            and deepening my understanding of data structures and algorithms.
            I genuinely enjoy diving into new areas of knowledge because it
            keeps me curious, motivated, and always growing as an engineer.
          </p>
        </div>
        <div>
          <img src={kathan} className="kathan" alt="Kathan Shah profile" />
        </div>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div className="skills">
          <div>
            <p></p>
            <img className="skill" src={reactpic} alt="React" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={js} alt="JavaScript" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={python} alt="Python" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={angular} alt="Angular" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={cplusplus} alt="C++" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={java} alt="Java" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={gitpic} alt="Git" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={html} alt="HTML" />
          </div>
          <div>
            <p></p>
            <img className="skill" src={css} alt="CSS" />
          </div>
        </div>
      </div>
      <div id="Contact">
        <h1>Contact</h1>
        <h3>Let's create your next experience together</h3>
        <h3>kathanjayshah@gmail.com</h3>
        <a href="https://github.com/kathanjayshah">
          <GitHubIcon></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/kathanjayshah/">
          <LinkedInIcon></LinkedInIcon>
        </a>
      </div>
    </div>
  );
}

export default Body;
