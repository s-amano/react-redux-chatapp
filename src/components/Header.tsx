import React from "react";
import { ExitButton } from "components/ExitButton";

export const Header: React.FC = React.memo(() => {
  return (
    <header>
      <nav className="w-screen bg-gray-400 h-18 py-3">
        <div className="flex items-center justify-center">
          <div className="ml-auto">
            <p className="text-3xl font-bold text-white">Realtime Chat APP</p>
          </div>
          <ExitButton />
        </div>
      </nav>
    </header>
  );
});

Header.displayName = "Header";
