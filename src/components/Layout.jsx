
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    }
  return (
    <div className="flex">
      <NavBar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <main className={`ml-[${isSidebarVisible ? '240px' : '70px'}] mt-[70px] min-h-[calc(100vh-70px)] flex-1 bg-red-100 p-4`}>
        <div className="min-h-full p-4 bg-white rounded-lg shadow">
            <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
