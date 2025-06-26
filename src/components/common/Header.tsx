interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-red-600">
          StreamFlix
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-red-600 transition-colors">Home</a>
          <a href="/browse" className="hover:text-red-600 transition-colors">Browse</a>
          <a href="/movies" className="hover:text-red-600 transition-colors">Movies</a>
          <a href="/tvshows" className="hover:text-red-600 transition-colors">TV Shows</a>
        </nav>
        <div className="flex space-x-4">
          <button
            onClick={onLoginClick}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Login
          </button>
          <button
            onClick={onRegisterClick}
            className="border border-red-600 px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

