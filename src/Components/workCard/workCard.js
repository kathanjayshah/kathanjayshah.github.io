import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
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
    <div className="jobContainer">
      <div className="avatarContainer">
        <Avatar
          variant="square"
          src={job.src}
          alt={job.company}
          sx={{ bgcolor: job.color, width: "3rem", height: "3rem", borderRadius: "4px" }}
        />
      </div>
      <div className="jobDetails">
        <div>
          <div className="companyDateContiner">
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                fontWeight: "600",
                fontSize: "0.75rem",
              }}
            >
              {job.company}
            </Typography>
            {isExpanded ? (
              <ExpandLessIcon onClick={isMobile ? handleToggle : null} onMouseLeave={isMobile ? null : handleToggle} fontSize="small" />
            ) : (
              <ExpandMoreIcon onClick={isMobile ? handleToggle : null} onMouseEnter={isMobile ? null : handleToggle} fontSize="small" />
            )}
          </div>
          <div className="jobPositionContiner">
            <Typography
              variant="body2"
              sx={{ textAlign: "left", fontWeight: "200", fontSize: "0.75rem" }}
            >
              {job.role}
            </Typography>
          </div>
        </div>

        <div className={`jobDescriptionContainer ${isExpanded ? "show" : ""}`}>
          {job.description.map((des) => {
            return (
              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                  fontWeight: "200",
                  fontSize: "0.75rem",
                }}
              >
                {des}
              </Typography>
            );
          })}
        </div>
      </div>
      <div className="date">
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            fontWeight: "200",
            fontSize: "0.65rem",
          }}
          color="textSecondary"
        >
          {job.duration}
        </Typography>
      </div>
    </div>
  );
};

export default Job;
