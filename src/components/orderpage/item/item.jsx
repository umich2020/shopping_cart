import { useState } from "react";
export function Item({
  url_param,
  name = "no food",
  increaseCount,
  decreaseCount,
  submitFn,
}) {
  const [imageSrc, setImageSrc] = useState("null");
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + url_param;
  async function getImgUrl() {
    const response = await fetch(url, { mode: "cors" });
    response.json().then(function (response) {
      // console.log('the response is')
      // console.log(response.meals[0].strMealThumb)

      if (response.meals) {
        const temp = response.meals[0].strMealThumb;
        setImageSrc(temp);
      }
    });
  }
  getImgUrl();

  function handleSubmit(event) {
    event.preventDefault();
    const input_value = event.target.elements[1].value;
    console.log(input_value);
    submitFn("temp2dsaf",3)
  }
  function inputError(){
    alert("you're value must be a number, greater than 0")
  }
  return (
    <>
      <img src={imageSrc} alt="no url was provided" />
      <p>{name}</p>
      <div id="+/-">
        <form onSubmit={(event) => handleSubmit(event, name + "_input")}>
          <button onClick={() => decreaseCount(name)}>-</button>
          <p>Type/use buttons to signal how much you want</p>
          <input
            placeholder="Type number. Min 0"
            name={name + "_input"}
            type="text"
            pattern="[0-9]*"
            onInvalid={inputError}
          />
          <button onClick={() => increaseCount(name)}>+</button>
          <button type="submit">Add to order</button>
        </form>
      </div>
    </>
  );
}
