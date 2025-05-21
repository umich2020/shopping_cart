import { Navbar } from "../navbar/Navbar";
import logo from "../../assets/images/mrKrabsPng.png";
import "./homepage.css";
import { Link } from "react-router-dom";
import { PopularItem } from "./popular_item/popular_item";
//images//
import FB from "./images/logos/icons8-facebook-50.png";
import Insta from "./images/logos/icons8-instagram-48.png";
import TikTok from "./images/logos/icons8-tiktok-50.png";


import Lottie from "lottie-react";
import animation from "./images/animations/money.json";

export function HomePage() {
  const popular_item = [
    [
      "Bread and Butter Pudding",
      "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
    ],
    [
      "Lamb Tzatziki Burgers",
      "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
    ],
    [
      "Fettuccine Alfredo",
      "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
    ],
  ];

  function redirect() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
  //   console.log('popular item is')
  //   console.log(typeof popular_item[0])
  return (
    <div id="homepages">
      <Navbar test={"one"} />
      <div id="welcome">
        <h1>Welcome to the Krusty Karb</h1>
        <img src={logo} alt="image of mr.krabs" />
        <br></br>
        <Link className="hoverHide"to="/shopping">Start an order</Link>

        <Lottie
          className="hide"
          animationData={animation}
          loop={true}
          autoplay={true}
          style={{ height: 300, width: 300 }}
        />
      </div>
      <div class="who_we_are">
        <h3>Who we are</h3>
        <p>
          Welcome to the Krusty Karb, the ultimate undersea indulgence for carb
          lovers! 🍞🧀🍟 This parody of the iconic Krusty Krab swaps out the
          seafood for a gloriously starchy menu where every dish is a
          masterpiece of carbs—no protein allowed! The restaurant's decor is a
          charmingly chaotic fusion of wheat, potatoes, and pasta-themed
          furnishings. The booths are shaped like giant dinner rolls, the walls
          are covered in spaghetti murals, and the menu? Oh, it's a dream come
          true for carb enthusiasts:
        </p>
      </div>
      <div class="popular_items">
        <h3>Popular menu items</h3>
        <div id="popular_items">
          {popular_item.map((item) => {
            return <PopularItem key={item[0]} name={item[0]} url={item[1]} />;
          })}
        </div>
      </div>
      <div class="contact">
        <h3>Contact</h3>
        <h4>
          Phone: <p>123-123-1234</p>
        </h4>
        <p>Don't click on socials :)</p>
        <img onClick={redirect} className="socials" src={FB} alt="FB logo" />
        <img onClick={redirect} className="socials" src={Insta} alt="IG logo" />
        <img
          onClick={redirect}
          className="socials"
          src={TikTok}
          alt="TikTok logo"
        />
      </div>
    </div>
  );
}
