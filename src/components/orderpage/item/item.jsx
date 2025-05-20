import { useEffect, useState } from "react";
import "./style.css";

export function Item({ url_param, name = "no food", submitFn, price }) {
  const [imageSrc, setImageSrc] = useState("null");
  const [count, setCount] = useState(0);
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
  function decreaseCount() {
    if (count > 0) {
      setCount((n) => parseInt(n) - 1);
    }
  }
  function increaseCount() {
    setCount((n) => parseInt(n) + 1);
  }
  function errorAlert(message) {
    alert(message);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (count < 0) {
      setCount(0);
      errorAlert("submitted value must be greater than 0");
      return;
    }
    const input_value = event.target.elements[1].value;
    // console.log(input_value);
    // console.log(event.target.elements[1].name)
    const item_name = event.target.elements[1].name;
    submitFn(item_name, input_value, price);
  }
  function inputError() {
    errorAlert("you're value must be a number, greater than 0");
    setCount(0);
  }
  function handleChange(e) {
    setCount(() => e.target.value);
    if (count < 0) {
      setCount(0);
    }
  }
  //checks console log of updated states
  useEffect(() => {
    // console.log(count)
  }, [count]);
  return (
    <div className="item">
      <img src={imageSrc} alt="no url was provided" />
      <p>{name}</p>
      <p>{"$" + price}</p>
      <div id="numbers">
        <form onSubmit={(event) => handleSubmit(event, name + "_input")}>
          <div id="inputs">
          <button
            className="inc_dec_button"
            type="button"
            onClick={() => decreaseCount(name)}
          >
          -
          </button>
          <div class='middle'>
          <p>Type/use buttons to submit  how much you want</p>
          <input className="food_input"
            placeholder="Type number. Min 0"
            name={name}
            type="number"
            // type="text"
            // pattern="[0-9]*"
            onInvalid={inputError}
            onChange={handleChange}
            value={count}
          />
          </div>
          <button
            className="inc_dec_button"
            type="button"
            onClick={increaseCount}
          >
            +
          </button>
          </div>
          <button class='submit'type="submit">Add to order</button>
        </form>
      </div>
    </div>
  );
}
