import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import MenuItem from "./ui/MenuItem";
import { useLocation } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const NavBar = ({isSidebarVisible, toggleSidebar}) => {
  const location = useLocation();

  const menuItems = [
    { text: "Home", link: "/", icon: <HomeRoundedIcon /> },
    { text: "About", link: "/about", icon: "ℹ️" },
    // Add more items as needed
  ];

  return (
    <>
      <div className="fixed flex w-full justify-start ">
        <div className={`flex w-full ml-[${isSidebarVisible ? '240px' : '70px'}] bg-blue-600 text-white`}>
          <h1 className="text-2xl font-bold">My Application</h1>
        </div>
        <nav className={`fixed justify-start w-[${isSidebarVisible ? '240px' : '70px'}] text-ellipsis h-screen bg-[#af1b1b] p-4 flex flex-col gap-8`}>
          <div className="flex content-space-between items-center justify-between">
            <span>Title</span>
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
              />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
