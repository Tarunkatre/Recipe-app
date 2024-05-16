import { useEffect, useState } from "react"
import { createContext } from "react"

export const Context = createContext(null)

const RecipeContext = ({children}) => {

    const [recipe,setrecipe] = useState([])

  useEffect(()=>{
    setrecipe(JSON.parse(localStorage.getItem('recipe'))||[]);
  },[])


  return (
      <Context.Provider value={[recipe, setrecipe]}>
        {children}
    </Context.Provider>
  )
}

export default RecipeContext