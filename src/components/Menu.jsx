import React from "react";

export default function Menu({ closeMenu }) {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-rouge flex flex-row z-menu overscroll-y-none justify-center">
        <div className="flex flex-col gap-12 justify-center items-center">
          <a href="#Home" onClick={closeMenu}>
            <p className="font-ff-casa text-blanc text-6xl hover:text-rouge drop-shadow-menu duration-500">Home</p>
          </a>
          <a href="#Trailers" onClick={closeMenu}>
            <p className="font-ff-casa text-blanc text-6xl hover:text-rouge drop-shadow-menu duration-500">Trailers</p>
          </a>
          <a href="#Characters" onClick={closeMenu}>
            <p className="font-ff-casa text-blanc text-6xl hover:text-rouge drop-shadow-menu duration-500">Characters</p>
          </a>
          <a href="#Seasons" onClick={closeMenu}>
            <p className="font-ff-casa text-blanc text-6xl hover:text-rouge drop-shadow-menu duration-500">Seasons</p>
          </a>
        </div>
        <div></div>
      </div>
    </>
  );
}
