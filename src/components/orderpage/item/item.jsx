import { useState } from "react"
export function Item({url_param,name='no food',increaseCount,decreaseCount}) {
    const [imageSrc, setImageSrc] = useState('null')
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+url_param
    async function getImgUrl(){
        const response = await fetch(url, {mode: 'cors'})
        response.json().then(function(response){
            // console.log('the response is')
            // console.log(response.meals[0].strMealThumb)

            if(response.meals){
            const temp =response.meals[0].strMealThumb
            setImageSrc(temp)

            }

        })
    }
    getImgUrl()
    return (
        <>
        <img src={imageSrc} alt="no url was provided" />
        <p>{name}</p>
        <div id='+/-'>
        <button onClick={()=>decreaseCount(name)}>-</button>
        <input />
        <button onClick={()=>increaseCount(name)}>+</button>
        <button>Add to order</button>

        </div>
        </>
    )
}