import Home from "../components/Home"
import AboutUs from "../components/AboutUs"
import Product from "../components/Products"
import Navbar from "../components/Navbar"

function MainPage(){
    return(
        <div>
          <Navbar/>
    <Home/>
      <AboutUs/>
      <Product/>
      </div>
    )
}
export default MainPage