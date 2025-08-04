import { Link } from "react-router-dom";
import { HamburgerMenu, SearchBar } from "@/components/home";
import { useAuth } from "@/context";

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  searchEndpoint: string; // Endpoint for search functionality
}

export const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  onRegisterClick,
  searchEndpoint
}) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Main Header Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl md:text-2xl font-bold text-red-600">
              Netflix
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link to="/movies" className="hover:text-red-600 transition-colors">
              Movies
            </Link>
            <Link to="/tvshows" className="hover:text-red-600 transition-colors">
              TV Shows
            </Link>
          </nav>

          {/* Search Bar - Hidden on small screens, visible on md+ */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <SearchBar endpoint={searchEndpoint} />
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors flex items-center space-x-2"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">
                    {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                  </span>
                </div>
                <span className="hidden lg:inline">Profile</span>
              </Link>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Login
                </button>
                <button
                  onClick={onRegisterClick}
                  className="border border-red-600 px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm"
                >
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <HamburgerMenu 
              onLoginClick={onLoginClick} 
              onRegisterClick={onRegisterClick}
            />
          </div>
        </div>

        {/* Mobile Search Bar - Shows below main header on small screens */}
        <div className="md:hidden mt-3">
          <SearchBar endpoint={searchEndpoint} />
        </div>
      </div>
    </header>
  );
};
