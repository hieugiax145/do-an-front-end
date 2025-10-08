import React from "react";
import { useTranslation } from "react-i18next";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "./ui/MenuItem";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const { t } = useTranslation();
    const sidebarWidth = isVisible ? 240 : 100;
    const menuItems = [
    { text: t("home"), link: "/", icon: <HomeRoundedIcon /> },
    { text: t("recruitmentReq"), link: "/about", icon: <WorkIcon /> },
    { text: t("recruitmentPos"), link: "/about", icon: <WorkIcon /> },
    { text: t("candidate"), link: "/candidate", icon: <PeopleOutlineIcon /> },
    { text: t("calendar"), link: "/calendar", icon: <CalendarTodayIcon /> },
    { text: t("emails"), link: "/email", icon: <PeopleOutlineIcon /> },
  
  ];

    return (    
        <div
          className="pt-4 pb-4 pl-4 pr-2 fixed top-0 bottom-0 left-0"
          style={{
            width: sidebarWidth,
            transition: "width 0.3s ease-in-out",
          }}
        >
          <nav className="h-full overflow-y-auto bg-white p-4 flex flex-col gap-8 rounded-xl shadow-lg border border-[#f3f3f3] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              className="flex items-center"
              style={{
                justifyContent: isVisible ? "space-between" : "center",
              }}
            >
              <span className={isVisible ? "" : "hidden"}>Title</span>
              <IconButton color="inherit" size="small" onClick={toggleSidebar}>
                <MenuIcon />
              </IconButton>
            </div>
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.text}
                  link={item.link}
                  text={item.text}
                  icon={item.icon}
                  isCollapsed={!isVisible}
                />
              ))}
            </div>
          </nav>
        </div>
    );
}

export default Sidebar;