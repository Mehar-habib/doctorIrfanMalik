"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLungs } from "react-icons/fa";
import { IoCloseCircleOutline, IoMenuOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { RiMoonFill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const tabs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#About" },
    { name: "Service", path: "/#Services" },
    { name: "Videos & FAQ", path: "/blogs" },
    { name: "Contact Us", path: "/#Contact" },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setActiveTab(window.location.pathname + window.location.hash);
  }, []);

  const handleTabClick = (path: string) => {
    setActiveTab(path);
    if (path.includes("#")) {
      const elementId = path.split("#")[1];
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {!loading && (
        <nav className="drop-shadow-md w-full bg-background mb-2 relative z-50">
          <div className="flex justify-between items-center py-2 lg:px-32 px-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaLungs className="h-10 w-10 md:h-12 md:w-12 text-blue-500" />
                <p className="text-xl md:text-2xl">
                  <span className="font-semibold text-red-500">Irfan</span>{" "}
                  Malik
                </p>
              </div>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? (
                <IoCloseCircleOutline size={35} className="text-blue-500" />
              ) : (
                <IoMenuOutline size={35} className="text-blue-500" />
              )}
            </button>

            <div className="hidden md:flex md:items-center md:gap-6">
              <ul className="flex gap-4 md:gap-6">
                {tabs.map(({ name, path }) => (
                  <li
                    key={name}
                    className={`relative cursor-pointer transition-colors ${
                      activeTab === path
                        ? "font-bold text-blue-600"
                        : "hover:text-blue-500 hover:font-bold"
                    }`}
                  >
                    <Link href={path} scroll={false}>
                      <span onClick={() => handleTabClick(path)}>{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {theme === "light" ? (
                <RiMoonFill onClick={handleThemeChange} className="h-6 w-6" />
              ) : (
                <MdLightMode onClick={handleThemeChange} className="h-6 w-6" />
              )}
            </div>
          </div>

          {/* Mobile Sidebar */}
          {isOpen && (
            <div className="fixed top-0 right-0 w-4/5 sm:w-3/5 md:hidden h-screen bg-white dark:bg-gray-900 dark:text-white shadow-xl z-50">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <div className="flex items-center gap-2">
                    <FaLungs className="h-10 w-10 text-blue-500" />
                    <p className="text-xl">
                      <span className="font-semibold text-red-500">Irfan</span>{" "}
                      Malik
                    </p>
                  </div>
                  <IoCloseCircleOutline
                    size={35}
                    className="cursor-pointer text-blue-500"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <ul className="flex flex-col gap-5 p-4 overflow-auto">
                  {tabs.map(({ name, path }) => (
                    <li
                      key={name}
                      className={`relative cursor-pointer transition-colors p-2 ${
                        activeTab === path
                          ? "font-bold text-blue-600"
                          : "hover:bg-blue-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <Link href={path} scroll={false}>
                        <span onClick={() => handleTabClick(path)}>{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center p-4 border-t mt-auto">
                  {theme === "light" ? (
                    <RiMoonFill
                      onClick={handleThemeChange}
                      className="h-6 w-6"
                    />
                  ) : (
                    <MdLightMode
                      onClick={handleThemeChange}
                      className="h-6 w-6"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
}
