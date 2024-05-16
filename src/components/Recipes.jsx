import React, { useContext } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/RecipeContext";


const Recipes = () => {
    const [recipe, setrecipe] = useContext(Context)

    const { pathname } = useLocation();
    return (
        <div className=" ">
            <h1 className="text-center text-2xl font-semibold">OUR RECIPES</h1>
            <p className="text-center text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            <div className="recipe-cards mt-[5%] justify-center flex flex-wrap p-5">
                {(recipe.length > 0) ? recipe.map((r) => <Card key={r.id} recipe={r} />):<h1 className=" text-5xl font-bold text-green-500">No recipes found!</h1>}
            </div>
            {pathname === "/Recipes" && (<Link to="/Create" className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-green-200 gap-x-3 flex items-center">
                    <i className="text-3xl text-green-600 ri-add-box-line"></i>
                    Create Recipe
                </Link>
            )}
        </div>
    );
};

export default Recipes;