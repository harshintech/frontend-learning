import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  // const param = useParams();
  const { id } = useParams();

  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  async function getRecipeDetails() {
    const responce = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await responce.json();
    console.log(data);
    if (data?.data) {
      setRecipeDetailsData(data?.data);
    }
  }

  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 border border-black px-10 m-20">
      <div className="row-start-1 lg:row-start-auto">
        <div className="h-96 overflow-hidden border-black rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-200 "
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-xl truncate text-black ">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className={`w-full p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md text-white
    ${
      favoritesList.findIndex(
        (item) => item.id === recipeDetailsData?.recipe?.id
      ) !== -1
        ? "bg-red-700" // Change bg color if in favorites (e.g., red)
        : "bg-black" // Default bg color
    }
  `}
          >
            {favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from Favorites"
              : "Save As Favorites"}
          </button>
        </div>
        <div className="mt-10">
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3 mt-5">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span>
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
