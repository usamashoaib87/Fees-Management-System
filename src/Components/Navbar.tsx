import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import { User, Settings, LogOut, HelpCircle, Bell } from "lucide-react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
interface NavbarProps {
  title: string;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, onLogout }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverMenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      hoverMenuRef.current &&
      !hoverMenuRef.current.contains(event.target as Node)
    ) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleLogout = () => {
    setIsHovered(false);
    onLogout();
  };


  return (
    <nav className="bg-blue-800 lg:px-5 md:px-5 sm:px-3 px-1 sticky top-0 z-10 flex justify-between items-center">
      <div className="text-white py-3 2xl:py-4 font-medium text-lg lg:text-xl 2xl:text-2xl flex-1 text-center">
        {title}
      </div>
      <div
        className="relative text-white cursor-pointer"
        onMouseEnter={handleMouseEnter}
      >
        <Stack direction="row" spacing={2}>
          <Avatar src="/broken-image.jpg"   sx={{
        width: { xs: 33, sm: 40, md: 43, lg: 43 },
        height: { xs: 33, sm: 40, md: 43, lg: 43 }
      }}/>
        </Stack>
        {isHovered && (
          <div
            className="absolute right-0 mt-1 2xl:w-80 md:w-60 sm:w-50 w-40 rounded shadow-lg z-10 border border-customBlue bg-[#EAF1F6]"
            ref={hoverMenuRef}
          >
            <div className="p-8">
              <a
                href="#"
                className="flex items-center 2xl:px-6 2xl:py-3 md:px-5 md:py-2 sm:px-4 sm:py-2 px-3 py-2 text-xs md:text-base text-zinc-900 md:font-medium border-b border-[#E0E0E0] shadow-sm bg-white mb-1 hover:bg-blue-800 hover:text-white rounded transform active:translate-y-0.5"
                onClick={() => setIsHovered(false)}
              >
                <User
                  size={16}
                  className="inline-block mr-2 w-5 sm:w-6 md:w-8 lg:w-8"
                />
                Profile
              </a>
              <a
                href="#"
                className="flex items-center 2xl:px-6 2xl:py-3 md:px-5 md:py-2 sm:px-4 sm:py-2 px-3 py-2 text-xs md:text-base text-zinc-900 md:font-medium border-b border-[#E0E0E0] shadow-sm bg-white mb-1 hover:bg-blue-800 hover:text-white rounded transform active:translate-y-0.5"
                onClick={() => setIsHovered(false)}
              >
                <Settings
                  size={16}
                  className="inline-block mr-2 w-5 sm:w-6 md:w-8 lg:w-8"
                />
                Settings
              </a>
              <a
                href="#"
                className="flex items-center 2xl:px-6 2xl:py-3 md:px-5 md:py-2 sm:px-4 sm:py-2 px-3 py-2 text-xs md:text-base text-zinc-900 md:font-medium border-b border-[#E0E0E0] shadow-sm bg-white mb-1 hover:bg-blue-800 hover:text-white rounded transform active:translate-y-0.5"
                onClick={() => setIsHovered(false)}
              >
                <Bell
                  size={16}
                  className="inline-block mr-2 w-5 sm:w-6 md:w-8 lg:w-8"
                />
                Notifications
              </a>
              <a
                href="#"
                className="flex items-center 2xl:px-6 2xl:py-3 md:px-5 md:py-2 sm:px-4 sm:py-2 px-3 py-2 text-xs md:text-base text-zinc-900 md:font-medium border-b border-[#E0E0E0] shadow-sm bg-white mb-1 hover:bg-blue-800 hover:text-white rounded transform active:translate-y-0.5"
                onClick={() => setIsHovered(false)}
              >
                <HelpCircle
                  size={16}
                  className="inline-block mr-2 w-5 sm:w-6 md:w-8 lg:w-8"
                />
                Help
              </a>
              <a
                href="#"
                className="flex items-center 2xl:px-6 2xl:py-3 md:px-5 md:py-2 sm:px-4 sm:py-2 px-3 py-2 text-xs md:text-base text-zinc-900 md:font-medium border-b border-[#E0E0E0] shadow-sm bg-white mb-1 hover:bg-blue-800 hover:text-white rounded transform active:translate-y-0.5"
                onClick={handleLogout}
              >
                <LogOut
                  size={16}
                  className="inline-block mr-2 w-5 sm:w-6 md:w-8 lg:w-8"
                />
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
