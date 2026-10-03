import { useEffect, useState } from "react";
import TemporaryDrawer from "./drawer";
import "./header.css";
import { useMediaQuery } from "@mui/material";

function Header() {
  const matches = useMediaQuery("(min-width:720px)");
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) {
      setOnLight(true);
      return undefined;
    }

    const headerH =
      document.querySelector(".site-header")?.offsetHeight || 64;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnLight(!entry.isIntersecting);
      },
      {
        // Flip once the hero no longer sits under the header band
        root: null,
        rootMargin: `-${headerH}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`site-header${onLight ? " site-header--on-light" : ""}`}>
      <div className="logos">
        <div className="logoName">
          <a href="/">
            Portfolio<span className="mark">.</span>
          </a>
        </div>
      </div>

      {matches ? (
        <nav className="groupicons" aria-label="Primary">
          <div className="clickicons">
            <a href="/#Experience">Experience</a>
          </div>
          <div className="clickicons">
            <a href="/#Education">Education</a>
          </div>
          <div className="clickicons">
            <a href="/#About">About</a>
          </div>
          <div className="clickicons">
            <a href="/#Contact">Contact</a>
          </div>
        </nav>
      ) : (
        <TemporaryDrawer />
      )}
    </header>
  );
}

export default Header;
