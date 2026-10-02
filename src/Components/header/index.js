import TemporaryDrawer from "./drawer";
import "./header.css";
import { useMediaQuery } from "@mui/material";

function Header() {
  const matches = useMediaQuery("(min-width:720px)");
  return (
    <header className="header">
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
