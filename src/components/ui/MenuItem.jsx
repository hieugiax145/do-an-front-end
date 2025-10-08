import { NavLink } from "react-router-dom";

const MenuItem = ({ link, text, icon, isCollapsed }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `flex items-center rounded-md p-2 text-ellipsis gap-1 ${isActive ? "bg-red-100/50 text-[#af1b1b]" : "hover:text-black"}`
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
          isCollapsed ? " opacity-0" : "opacity-100"
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
