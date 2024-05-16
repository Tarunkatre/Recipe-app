import Nav from "./components/Nav"
import About from "./components/About"
import Contact from "./components/Contact"
import Create from "./components/Create"
import Details from "./components/Details"
import Layout from "./components/Layout"
import Recipes from "./components/Recipes"
import Updates from "./components/Updates"
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Create" element={<Create/>}/>
        <Route path="/Recipes/:id" element={<Details/>}/>
        <Route path="/Recipes" element={<Recipes/>}/>
        <Route path="/Update/:id" element={<Updates/>}/>
      </Routes>
    </div>
  )
}

export default App