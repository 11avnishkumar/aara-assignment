import React from "react";
import { Link } from "react-router-dom";
import { useGLobalContext } from "../context/ProfileContext";
const Header = () => {
  const { getToken, logOut } = useGLobalContext();
  return (
    <div className="fixed top-0 left-0 right-0 w-full flex justify-between items-center gap-4 py-2 px-4 bg-white/50  backdrop-filter backdrop-blur-lg">
      <Link to="/">
        <h1 className="text-4xl text-emerald-600 font-semibold">Aara</h1>
      </Link>
      {getToken ? (
        <div className="flex justify-center items-center gap-2">
          <Link
            to="/profile"
            className="border-2 bg-black text-white border-black p-3 w-38 md:w-48 text-center"
          >
            Profile
          </Link>
          <span
            onClick={() => logOut()}
            className="border-2 border-black p-3 w-28 md:w-48 text-center cursor-pointer"
          >
            Logout
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
