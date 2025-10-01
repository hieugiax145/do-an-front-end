import { NavLink } from "react-router-dom";

const MenuItem = ({ link,text, icon }) => {
    return (
        <NavLink
              to={link}
              className={({ isActive }) => (isActive ? "flex items-center bg-white text-[#af1b1b] text-bold rounded-md p-2 transition-all scale-105 text-ellipsis" : "p-2 text-gray-200 flex hover:text-bold rounded-md text-ellipsis") }
            >
              {icon && <span className="mr-2">{icon}</span>}
              <span>{text}</span>
            </NavLink>
    );
};

export default MenuItem;
