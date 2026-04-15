import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navabar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex px-1 py-3 justify-between items-center container mx-auto flex-col lg:flex-row">
      <h2 className="text-2xl font-semibold mb-7">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300 font-bold"
        >
          FoodooRecipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Items...  ( eg.Pizza )"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="bg-white/75 p-3 w-[300px] between-sm-md:w-[300px] sm:w-auto px-5 h-10 rounded-full outline:none between-sm-md:mb-10 sm:mb-6 mb-10 lg:w-96 shadow-lg shadow-blue-100 focus:shadow-blue-300 text-xs sm:text-xl"
        />
      </form>
      <ul className="flex gap-5 justify-between ">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold mx-10 border-black border-b-2 p-2 duration-300"
                : "text-black hover:text-gray-700 duration-300 font-semibold mx-10"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold mx-10 border-black border-b-2 p-2 duration-300"
                : "text-black hover:text-gray-700 duration-300 font-semibold mx-10"
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
