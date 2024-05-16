import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/RecipeContext";
import { toast } from "react-toastify";

const Update = () => {

    const [recipe, setrecipe] = useContext(Context)
    const navigate = useNavigate()
    const {id} = useParams()
    const details = recipe.find((r)=>r.id == id)

    const [title, settitle] = useState(details.title)
    const [img, setimg] = useState(details.img)
    const [description, setdescription] = useState(details.description)
    const [ingredients, setingredients] = useState(details.ingredients)
    const [instructions, setinstructions] = useState(details.instructions)

    const submitHandler = (e)=>{
        e.preventDefault()
        const updated = {
            id: id,
            title,
            img,
            description,
            ingredients,
            instructions
        }

        const index = recipe.findIndex((r) => r.id == id)
        const copyRecipe = [...recipe]
        copyRecipe[index] = updated
        setrecipe(copyRecipe)
        
        localStorage.setItem('recipe',JSON.stringify(copyRecipe))
        toast.success("recipe updated!")
        navigate('/Recipes')

    }

    return (
        <form onSubmit={submitHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                value={img} onChange={(e) => setimg(e.target.value)}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                value={title} onChange={(e) => settitle(e.target.value)}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                value={description} onChange={(e) => setdescription(e.target.value)}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                value={ingredients} onChange={(e) => setingredients(e.target.value)}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                value={instructions} onChange={(e) => setinstructions(e.target.value)}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Update;