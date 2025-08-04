import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context";

interface HamburgerMenuProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ 
  onLoginClick, 
  onRegisterClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  const closeMenu = () => setIsOpen(false);

  const handleAuthAction = (action: () => void) => {
    action();
    closeMenu();
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors"
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

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-16 left-4 right-4 bg-gray-900 border border-gray-700 text-white shadow-2xl rounded-lg z-50 max-w-sm mx-auto">
          <div className="p-4 space-y-4">
            {/* Navigation Links */}
            <div className="space-y-3 border-b border-gray-700 pb-4">
              <Link 
                to="/" 
                onClick={closeMenu} 
                className="block hover:text-red-500 transition-colors py-2 text-lg"
              >
                Home
              </Link>
              <Link 
                to="/movies" 
                onClick={closeMenu} 
                className="block hover:text-red-500 transition-colors py-2 text-lg"
              >
                Movies
              </Link>
              <Link 
                to="/tvshows" 
                onClick={closeMenu} 
                className="block hover:text-red-500 transition-colors py-2 text-lg"
              >
                TV Shows
              </Link>
            </div>

            {/* User Actions */}
            <div className="space-y-3">
              {isAuthenticated ? (
                <Link 
                  to="/profile" 
                  onClick={closeMenu} 
                  className="flex items-center space-x-3 hover:text-red-500 transition-colors py-2"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                    </span>
                  </div>
                  <span className="text-lg">Profile</span>
                </Link>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => handleAuthAction(onLoginClick)}
                    className="w-full bg-red-600 px-4 py-3 rounded-lg hover:bg-red-700 transition-colors text-white font-medium"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthAction(onRegisterClick)}
                    className="w-full border border-red-600 px-4 py-3 rounded-lg hover:bg-red-600 transition-colors text-white font-medium"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
