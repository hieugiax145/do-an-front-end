import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { NavLink } from "react-router-dom";
import MenuItem from "./ui/MenuItem";
import { useLocation } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useTranslation } from "react-i18next";

const NavBar = ({ isSidebarVisible, toggleSidebar,title }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const sidebarWidth = isSidebarVisible ? 240 : 100;

   const getTitle = () => {
          const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
          const mainRoute = pathSegments[1] || '';
  
          switch (mainRoute) {
              case 'calendar':
                  return t('calendar');
              case 'candidate':
                  return t('candidate');
              case 'orders':
                  return t('orders');
              default:
                  return t('home');
          }
      }

  const menuItems = [
    { text: t("home"), link: "/", icon: <HomeRoundedIcon /> },
    { text: t("recruitmentReq"), link: "/about", icon: <WorkIcon /> },
    { text: t("recruitmentPos"), link: "/about", icon: <WorkIcon /> },
    { text: t("candidate"), link: "/candidate", icon: <PeopleOutlineIcon   /> },
    { text: t("calendar"), link: "/calendar", icon: <CalendarTodayIcon /> },
    // Add more items as needed
  ];

  return (
    <>
      <div className="fixed flex w-full justify-start ">
        <div
          className="fixed h-[60px] bg-white items-center rounded-xl px-4 flex"
          style={{
            top: 16, 
            right: 16,
            left: sidebarWidth,
            transition: "left 0.3s ease-in-out",
          }}
        >
          <h1 className="text-2xl font-bold">{title ?? getTitle()}</h1>
        </div>
        <div
          className="pt-4 pb-4 pl-4 pr-2 fixed top-0 bottom-0 left-0"
          style={{
            width: sidebarWidth,
            transition: "width 0.3s ease-in-out",
          }}
        >
          <nav className="h-full bg-[#af1b1b] p-4 flex flex-col gap-8 rounded-xl shadow-lg text-white">
            <div
              className="flex items-center"
              style={{
                justifyContent: isSidebarVisible ? "space-between" : "center",
              }}
            >
              <span className={isSidebarVisible ? "" : "hidden"}>Title</span>
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
      </div>
    </>
  );
};

export default NavBar;
