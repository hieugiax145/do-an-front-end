import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import { NavLink } from "react-router-dom";
import MenuItem from "./ui/MenuItem";
import { useLocation } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useTranslation } from "react-i18next";

const NavBar = ({ isSidebarVisible, toggleSidebar }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const sidebarWidth = isSidebarVisible ? 240 : 80;

  const menuItems = [
    { text: t("home"), link: "/", icon: <HomeRoundedIcon /> },
    { text: t("recruitmentReq"), link: "/about", icon: <WorkIcon /> },
    { text: t("recruitmentPos"), link: "/about", icon: <WorkIcon /> },
    { text: t("candidate"), link: "/candidate", icon: <WorkIcon /> },
    { text: t("calendar"), link: "/calendar", icon: <WorkIcon /> },
    // Add more items as needed
  ];

  return (
    <>
      <div className="fixed flex w-full justify-start ">
        <div
          className="flex fixed w-full h-[70px] bg-white items-center px-4"
          style={{ marginLeft: sidebarWidth, transition: "width 0.3s ease-in-out" }}
        >
          <h1 className="text-2xl font-bold">Title</h1>
          <div> ferfee</div>

        </div>
        <nav
          className="fixed top-0 left-0 h-screen bg-[#af1b1b] p-4 flex flex-col gap-8"
          style={{ width: sidebarWidth, transition: "width 0.3s ease-in-out" }}
        >
          <div className="flex content-space-between items-center" style={{ justifyContent:isSidebarVisible?"space-between":"center"}}>
            <span className={isSidebarVisible?"":"hidden"}>Title</span>
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
                isCollapsed={!isSidebarVisible}
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
