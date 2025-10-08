import { useState, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const EXPANDED = 240;
const COLLAPSED = 100;

const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

 

  const sidebarWidth = useMemo(
    () => (isSidebarVisible ? EXPANDED : COLLAPSED),
    [isSidebarVisible]
  );

  const toggleSidebar = () => setIsSidebarVisible((v) => !v);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <NavBar
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
        sidebarWidth={sidebarWidth}
      />
      <Sidebar
        isVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      {/* Main Content Area */}
      <main
        className="mt-[84px] min-h-[calc(100vh-76px-24px)] flex-1 bg-red-100 rounded-xl p-2 m-4"
        style={{
          marginLeft: sidebarWidth,                             // <-- dịch theo sidebar
          transition: "margin-left 0.3s ease-in-out",           // <-- animate margin-left
          willChange: "margin-left",
        }}
      >
        <div className="min-h-full p-4 bg-white rounded-lg shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
