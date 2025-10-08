import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AutoTextSize } from "auto-text-size";
import UserDropdown from "./ui/UserDropdown";
import UserIcon from "@mui/icons-material/Person";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

const NavBar = ({ isSidebarVisible, title }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const sidebarWidth = isSidebarVisible ? 240 : 100;

  const getTitle = () => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment !== "");
    const mainRoute = pathSegments[1] || "";

    switch (mainRoute) {
      case "calendar":
        return t("calendar");
      case "candidate":
        return t("candidate");
      case "orders":
        return t("orders");
      default:
        return t("home");
    }
  };

  return (
    <div
      className="flex justify-between fixed h-[60px] bg-white items-center rounded-xl shadow-lg px-4"
      style={{
        top: 16,
        right: 16,
        left: sidebarWidth,
        transition: "left 0.3s ease-in-out",
      }}
    >
      <div className="text-2xl font-bold">
        <AutoTextSize>{title ?? getTitle()}</AutoTextSize>
      </div>
      <UserDropdown
      /> 
    </div>
  );
};

export default NavBar;
