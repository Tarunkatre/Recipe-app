import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {Context} from "../context/RecipeContext";
import { toast } from "react-toastify";

const Details = () => {
    const navigate = useNavigate()
    const [recipe,setrecipe] = useContext(Context)
    const {id} = useParams()
    const details = recipe.find((r)=>r.id == id)

    const DeleteHandler = () => {
        // const copyRecipe = [...recipe]
        // copyRecipe.splice(recipe.findIndex((r) => r.id == id),1)
        // setrecipe(copyRecipe)
        const alert = confirm('Are you sure you want to delete this recipe?')
        if(alert){
            setrecipe(recipe.filter((r) => r.id != id))
            localStorage.setItem("recipe", JSON.stringify(recipe.filter((r) => r.id != id)))
            toast.success("Recipe deleted successfully!")
            navigate('/Recipes')
        }
    }
    
    return details ? (
        <div className="w-[80%] m-auto p-5">
            <Link to="/Recipes" className="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex h-[75vh] mt-3">
                <div className="dets w-[50%] p-[3%] shadow">
                    <img className="" src={details.img} alt="" />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">
                        {details.title}
                    </h1>
                    <p className="text-zinc-400">{details.description}</p>
                    <div className="flex justify-between py-10 px-5">
                        <Link
                            to={`/Update/${details.id}`}
                            className="text-blue-400 border-blue-400 border py-2 px-5"
                        >
                            Update
                        </Link>
                        <button onClick={DeleteHandler} className="text-red-400 border-red-400 border py-2 px-5">
                            Delete
                        </button>
                    </div>
                </div>
                <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                    <h1 className="text-3xl border-b border-green-600 text-green-600">
                        Ingredients
                    </h1>
                    <ul className="text-zinc-600 list-disc  p-3 ">
                        {details.ingredients.split(",").map((d, i) => (
                            <li className="list-item text-sm  mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-3xl border-b border-green-600 text-green-600">
                        Instructions
                    </h1>
                    <ul className="text-zinc-600 list-decimal  p-3 ">
                        {details.instructions.split(".").map((d, i) => (
                            <li className="list-item text-sm  mb-2" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) :
     "Loading..."
};

export default Details;