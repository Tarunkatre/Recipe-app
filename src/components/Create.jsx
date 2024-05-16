import { useContext, useState } from "react";
import { Context } from "../context/RecipeContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [recipe,setrecipe] = useContext(Context)
    const navigate = useNavigate()

    const [title,settitle] = useState("")
    const [img,setimg] = useState("")
    const [description,setdescription] = useState("")
    const [ingredients,setingredients] = useState("")
    const [instructions,setinstructions] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault();

        const newRecipe = {
            id:nanoid(),
            title,
            img,
            description,
            ingredients,
            instructions
        }
        setrecipe([...recipe,newRecipe])
        localStorage.setItem('recipe',JSON.stringify([...recipe, newRecipe]))
        toast.success("Recipe created successfully!")
        navigate('/Recipes')
    }

    return (
        <form onSubmit={submitHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
            </h1>
            <input
                type="url"
                value={img} onChange={(e)=>setimg(e.target.value)} className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                type="text"
                value={title} onChange={(e)=>settitle(e.target.value)} className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                value={description} onChange={(e)=>setdescription(e.target.value)} className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                value={ingredients} onChange={(e)=>setingredients(e.target.value)} className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                value={instructions} onChange={(e)=>setinstructions(e.target.value)} className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;