import { NavLink } from "react-router-dom";

const MenuItem = ({ link, text, icon, isCollapsed }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "flex items-center bg-white text-[#af1b1b] text-bold rounded-md p-2 transition-all scale-105 text-ellipsis"
          : "p-2 text-gray-200 flex items-center hover:text-bold rounded-md text-ellipsis"
      }
    style={{
      justifyContent:isCollapsed?"center":""
    }}
    >
      <span
        className={`transition-all duration-300 ease-in-out`}
      >
        {icon}
      </span>
      <span
        className={`transition-all duration-300 ease-in-out truncate ${
          isCollapsed ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100"
        } ${
          isCollapsed ? "hidden" : ""
        }`}
      >
        {text}
      </span>
    </NavLink>
  );
};

export default MenuItem;
