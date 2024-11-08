import { SearchIcon, UserIcon } from "lucide-react";
import React from "react";

export interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  return (
    <nav className={`flex items-center justify-between p-4 ${className}`}>
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Neu & beliebt
          </a>
          <a href="#" className="hover:text-gray-300">
            Mediatheken
          </a>
          <a href="#" className="hover:text-gray-300">
            Serien
          </a>
          <a href="#" className="hover:text-gray-300">
            Filme
          </a>
          <a href="#" className="hover:text-gray-300">
            Sport
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <SearchIcon className="w-6 h-6" />
        <UserIcon className="w-6 h-6" />
      </div>
    </nav>
  );
};

export default Header;
