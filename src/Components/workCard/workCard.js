import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ChevronRight";
import ExpandLessIcon from "@mui/icons-material/ExpandMore";
import { isMobile } from "react-device-detect";

import "./workCard.css";

const Job = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <article className="jobContainer">
      <div className="avatarContainer">
        <img className="job-icon" src={job.src} alt={job.company} />
      </div>
      <div className="jobDetails">
        <div>
          <div className="companyDateContiner">
            <Typography className="job-company" component="h3">
              {job.company}
            </Typography>
            {isExpanded ? (
              <ExpandLessIcon
                onClick={isMobile ? handleToggle : null}
                onMouseLeave={isMobile ? null : handleToggle}
                fontSize="small"
                aria-label="Collapse role details"
              />
            ) : (
              <ExpandMoreIcon
                onClick={isMobile ? handleToggle : null}
                onMouseEnter={isMobile ? null : handleToggle}
                fontSize="small"
                aria-label="Expand role details"
              />
            )}
          </div>
          <div className="jobPositionContiner">
            <Typography className="job-role" component="p">
              {job.role}
            </Typography>
          </div>
        </div>

        <div className={`jobDescriptionContainer ${isExpanded ? "show" : ""}`}>
          {job.description.map((des, index) => (
            <Typography className="job-description" component="p" key={index}>
              {des}
            </Typography>
          ))}
        </div>
      </div>
      <div className="date">
        <Typography className="job-date" component="p">
          {job.duration}
        </Typography>
      </div>
    </article>
  );
};

export default Job;
