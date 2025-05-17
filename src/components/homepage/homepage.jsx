import { Navbar } from "../navbar/Navbar"
import logo from '../../assets/images/mrKrabsPng.png'
import './homepage.css'
import { Link } from "react-router-dom"
import { PopularItem } from "./popular_item/popular_item"

export function HomePage(){
    return (
        <>
        <Navbar/>
        <h1>Welcome to the Krusty Karb</h1>
        <img src={logo} alt='image of mr.krabs'/><br></br>
        <Link to="/shopping" >Start an order</Link>

        <h3>Who we are</h3>
        <p>Chatgpt description</p>
        

        <h3>Popular menu items</h3>
        <div id='popular_items'>
        <PopularItem/>
            </div>
        
        <h3>Contact</h3>
        <h4>Phone: <p>123-123-1234</p></h4>
        <img class='socials'src='null'alt='FB logo'/>
                <img class='socials'src='null'alt='IG logo'/>
        <img class='socials'src='null'alt='TikTok logo'/>


        </>
    )
}