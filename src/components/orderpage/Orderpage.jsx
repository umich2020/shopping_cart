import { Navbar } from "../navbar/Navbar"
import { Item } from "./item/item"

export function OrderPage(){
    //items
    //entree mac&cheese
    /*
    https://www.themealdb.com/api/json/v1/1/search.php?s=

    */
    return(
        <>
        <Navbar/>

        <h1>We got yummy food!</h1>
        <Item url_param="Vegan%20Chocolate%20Cake"/>
        </>
    )
}