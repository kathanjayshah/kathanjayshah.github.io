import "./body.css";

import { useState } from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Work from "../timeline/timelineCmpt";

import typescript from "../../Assets/typescript.svg";
import js from "../../Assets/js.png";
import reactpic from "../../Assets/react.png";
import nextjs from "../../Assets/nextjs.png";
import angular from "../../Assets/Angular.svg.png";
import nodejs from "../../Assets/nodejs.svg";
import python from "../../Assets/python.png";
import go from "../../Assets/go.svg";
import graphql from "../../Assets/graphql.svg";
import postgresql from "../../Assets/postgresql.svg";
import mysql from "../../Assets/mysql.svg";
import gitpic from "../../Assets/git.png";
import githubactions from "../../Assets/githubactions.svg";
import html from "../../Assets/html.png";
import css from "../../Assets/css.png";

const skills = [
  { name: "TypeScript", src: typescript },
  { name: "JavaScript", src: js },
  { name: "React", src: reactpic },
  { name: "Next.js", src: nextjs },
  { name: "Angular", src: angular },
  { name: "Node.js", src: nodejs },
  { name: "Python", src: python },
  { name: "Go", src: go },
  { name: "GraphQL", src: graphql },
  { name: "PostgreSQL", src: postgresql },
  { name: "MySQL", src: mysql },
  { name: "Git", src: gitpic },
  { name: "CI/CD", src: githubactions },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
];

function Body() {
  const [active, setActive] = useState(false);

  return (
    <main className="body">
      <section className="hero" aria-label="Introduction">
        <div className="hero-inner">
          <p className="hero-role">Member of Technical Staff</p>
          <h1 className="hero-brand">Kathan Shah</h1>
        </div>
      </section>

      <div className="page-content">
        <section className="quote" aria-label="Favorite quote">
          <button
            type="button"
            className="quote-toggle"
            onClick={() => setActive((v) => !v)}
            aria-label="Translate quote"
          >
            {!active ? (
              <span>{'\u0A86 \u0AB8\u0AAE\u0AAF \u0AAA\u0AA3 \u0AB5\u0AB9\u0AC0 \u0A9C\u0AB6\u0AC7'}</span>
            ) : (
              <span>This time shall pass too</span>
            )}
            <GTranslateIcon className="translate" />
          </button>
          <p className="quote-attr">Narendra Lalchand Shah, Grandfather</p>
        </section>

        <section id="Experience" className="section">
          <h2 className="section-title">Experience</h2>
          <Work work={true} />
        </section>

        <section id="Education" className="section">
          <h2 className="section-title">Education</h2>
          <Work education={true} />
        </section>

        <div className="about-skills-grid">
          <section id="About" className="section">
            <h2 className="section-title">About</h2>
            <div className="about">
              <p>
                I&apos;m a Member of Technical Staff who likes shipping software
                that holds up in the real world: clear APIs, sharp UX, and systems
                people can trust when it matters.
              </p>
              <p>
                Day to day I work across the stack on product software, from
                data-heavy features and AI-assisted workflows to services,
                databases, and deployment pipelines. I care about clean design,
                solid engineering judgment, and getting hard problems into
                production.
              </p>
              <p>
                Outside of work I hike, play cricket, and hang out with my dog.
              </p>
            </div>
          </section>

          <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>
            <ul className="skills">
              {skills.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <img className="skill" src={skill.src} alt={skill.name} />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section id="Contact" className="section contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-row">
            <div className="contact-links">
              <a
                href="https://github.com/kathanjayshah"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/kathanjayshah/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
            <a className="contact-email" href="mailto:kathanjayshah@gmail.com">
              kathanjayshah@gmail.com
            </a>
          </div>
          <p className="photo-credit">
            Hero image: SpaceX Starship Flight 14, via{" "}
            <a
              href="https://www.space.com/space-exploration/launches-spacecraft/starship-just-reached-orbit-for-the-1st-time-whats-next-for-the-spacex-megarocket"
              target="_blank"
              rel="noreferrer"
            >
              Space.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

export default Body;
