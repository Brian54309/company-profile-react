import Navbar from "./Navbar";
import "./style.css";
function Home (){
    return(
        <>
        <Navbar/>
        <div id="home">
        <img src='src\assets\logo.png' id='logo'/>
        <p id="header">Official Distributor for Broco & Panasonic</p>
        <p id="subheader">We provide high-quality electrical appliances and products to retail businesses</p>
        <button id='button'>View Products</button>  
        {/* rencana button untuk pindah ke page terpisah product */}
        </div>
        </>

    )
}

export default Home