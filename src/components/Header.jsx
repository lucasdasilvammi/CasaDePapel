import Menu from "./Menu";
import React, { useState } from 'react';

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  function closeMenu() {
    setIsMenuVisible(false);
  }

  return (
    <div>
      <div className="w-full h-auto flex justify-center fixed py-10 bg-gradient-header z-header">
        <div className="w-5/6 flex items-center justify-between">
          <img className="w-48" src="./src/assets/LogoCasaDePapel.svg" alt="" />
          <img onClick={toggleMenu} className="cursor-pointer" src="./src/assets/Burger.svg" alt="" />
        </div>
      </div>

      {isMenuVisible && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-noir opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-3/5 xl:w-2/5 z-50 overflow-y-auto transition-transform ease-in-out duration-500 ${isMenuVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {isMenuVisible && (
          <Menu closeMenu={closeMenu} />
        )}
      </div>
    </div>
  );
}
