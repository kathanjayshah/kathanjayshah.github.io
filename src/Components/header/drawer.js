import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

const links = ["Experience", "Education", "About", "Contact"];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggle = (next) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(next);
  };

  return (
    <div>
      <MenuIcon
        onClick={toggle(true)}
        aria-label="Open menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggle(true)(e);
        }}
      />
      <Drawer
        anchor="right"
        open={open}
        onClose={toggle(false)}
        PaperProps={{
          sx: {
            width: 260,
            backgroundColor: "#000000",
            color: "#ffffff",
            borderLeft: "1px solid rgba(255,255,255,0.18)",
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggle(false)}
          onKeyDown={toggle(false)}
          sx={{ pt: 2 }}
        >
          <List>
            {links.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${text}`}
                  sx={{
                    py: 1.25,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                  }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
