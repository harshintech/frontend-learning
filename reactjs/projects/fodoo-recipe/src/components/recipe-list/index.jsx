import React from "react";
import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-slate-300 shadow-xl shadow-slate-100 gap-5 border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center">
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-xl truncate text-black ">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 px-8 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-blue-900 text-white "
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
