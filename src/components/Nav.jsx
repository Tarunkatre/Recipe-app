import { Link } from "react-router-dom"


const Nav = () => {
  return (
      <nav className="h-[10vh] w-full flex items-center justify-between ">
          <img
              className="h-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
              alt=""
          />
          <div className="flex gap-x-10 text-md items-center">
              <Link className="hover:text-green-600 duration-200" to="/">
                  Home
              </Link>
              <Link
                  className="hover:text-green-600 duration-200"
                  to="/Recipes"
              >
                  Recipes
              </Link>
              <Link className="hover:text-green-600 duration-200" to="/About">
                  About
              </Link>
              <Link
                  className="hover:text-green-600 duration-200"
                  to="/Contact"
              >
                  Contact
              </Link>
          </div>
          <i className="text-3xl ri-grid-fill text-green-600"></i>
      </nav>
  )
}

export default Nav