import { useState, useEffect, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const EXPANDED = 260;
const COLLAPSED = 100;
const APPBAR_HEIGHT = 60;

const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

 

  const sidebarWidth = useMemo(
    () => (isSidebarVisible ? EXPANDED : COLLAPSED),
    [isSidebarVisible]
  );

  const toggleSidebar = () => setIsSidebarVisible((v) => !v);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setIsSidebarVisible(false);
  //     } else {
  //       setIsSidebarVisible(true);
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="flex">
      <Navbar
        sidebarWidth={sidebarWidth}
        isSidebarVisible={isSidebarVisible}
      />
      <Sidebar
        sidebarWidth={sidebarWidth}
        isVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      {/* Main Content Area */}
      <main
        className="flex-1 p-4 pl-0
         transition-all duration-300 ease-in-out"
        style={{
          marginLeft: sidebarWidth,
          width: `calc(100vh - ${sidebarWidth}px)`,
          marginTop: APPBAR_HEIGHT + 16, // <-- dịch theo sidebar
          transition: "margin-left 0.3s ease-in-out", // <-- animate margin-left
          willChange: "margin-left",
          minHeight: `calc(100vh - ${APPBAR_HEIGHT + 16}px)`, // <-- đảm bảo chiều cao tối thiểu
        }}
      >
        <div className="min-h-full p-4 bg-white rounded-xl shadow">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
