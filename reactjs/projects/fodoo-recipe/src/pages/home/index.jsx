import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-list";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div> Loading...Please Wait!</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-8">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p className="lg:text-4xl text-[14px] text-center text-black font-extrabold mt-20">
            Nothing To Show. Please Search Something
          </p>
          <img src="/images/mainlogo.png" className="logo mt-10 lg:w-[300px]"></img>
        </div>
      )}
    </div>
  );
}
