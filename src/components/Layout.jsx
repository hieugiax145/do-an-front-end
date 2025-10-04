import { useState , useEffect} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);


  const sidebarWidth = isSidebarVisible ? 240 : 80;

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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
      />
      <main
        className={`mt-[70px] min-h-[calc(100vh-70px)] flex-1 bg-red-100 p-4`}
        style={{
          marginLeft: sidebarWidth,
          transition: "width 0.3s ease-in-out",
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
