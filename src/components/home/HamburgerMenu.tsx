import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="md:hidden relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
         <div className="absolute top-10 left-0 w-48 bg-black text-white shadow-lg rounded-lg p-4 z-50 flex flex-col space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-red-500">
            Home
          </Link>
          <Link to="/movies" onClick={() => setIsOpen(false)} className="hover:text-red-500">
            Movies
          </Link>
          <Link to="/tvshows" onClick={() => setIsOpen(false)} className="hover:text-red-500">
            TV Shows
          </Link>
          {isAuthenticated && (
            <Link 
              to="/profile" 
              onClick={() => setIsOpen(false)} 
              className="hover:text-red-500 flex items-center space-x-2 border-t border-gray-600 pt-4"
            >
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                </span>
              </div>
              <span>Profile</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
