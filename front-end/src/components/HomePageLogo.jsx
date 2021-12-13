import "./HomePageLogo.css";
import React, { useEffect } from "react";
import food1 from "../img/icons/icons8-bento-50.png";
import food2 from "../img/icons/icons8-cake-50.png";
import food3 from "../img/icons/icons8-chinese-noodle-50.png";
import food4 from "../img/icons/icons8-cookies-50.png";
import food5 from "../img/icons/icons8-croissant-50.png";
import food6 from "../img/icons/icons8-cupcake-50.png";
import food7 from "../img/icons/icons8-curry-50.png";
import food8 from "../img/icons/icons8-doughnut-50.png";
import food9 from "../img/icons/icons8-food-and-wine-50.png";
import food10 from "../img/icons/icons8-french-fries-50.png";
import food11 from "../img/icons/icons8-fried-chicken-50.png";
import food12 from "../img/icons/icons8-hamburger-50.png";
import food13 from "../img/icons/icons8-hot-dog-50.png";
import food14 from "../img/icons/icons8-kawaii-coffee-50.png";
import food15 from "../img/icons/icons8-kawaii-ice-cream-50.png";
import food16 from "../img/icons/icons8-kawaii-pizza-50.png";
import food17 from "../img/icons/icons8-nachos-50.png";
import food18 from "../img/icons/icons8-paella-50.png";
import food19 from "../img/icons/icons8-pancake-50.png";
import food20 from "../img/icons/icons8-pie-50.png";
import food21 from "../img/icons/icons8-pizza-50.png";
import food22 from "../img/icons/icons8-popcorn-50.png";
import food23 from "../img/icons/icons8-salad-50.png";
import food24 from "../img/icons/icons8-sandwich-50.png";
import food25 from "../img/icons/icons8-spaghetti-50.png";
import food26 from "../img/icons/icons8-sushi-50.png";
import food27 from "../img/icons/icons8-taco-50.png";
import food28 from "../img/icons/icons8-wrap-50.png";

const foodIcons = [
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  food9,
  food10,
  food11,
  food12,
  food13,
  food14,
  food15,
  food16,
  food17,
  food18,
  food19,
  food20,
  food21,
  food22,
  food23,
  food24,
  food25,
  food26,
  food27,
  food28,
];

function Plate(props) {
  const { className, img } = props;

  return (
    <div className={"plate " + className}>
      <div className="inner-plate-circle">
        <img src={img} className="food-icon"></img>
      </div>
    </div>
  );
}

function HomePageLogo() {
  const [randomFood1, setRandomFood1] = React.useState(food1);
  const [randomFood2, setRandomFood2] = React.useState(food2);
  const [randomFood3, setRandomFood3] = React.useState(food3);

  const setRandomDishes = () => {
    const randomNumber = () => Math.floor(Math.random() * 28);
    setRandomFood1(foodIcons[randomNumber()]);
    setRandomFood2(foodIcons[randomNumber()]);
    setRandomFood3(foodIcons[randomNumber()]);
  };

  useEffect(() => {
    setRandomDishes();
  }, []);

  return (
    <div className="HomePageLogo">
      <div className="container" onClick={setRandomDishes}>
        <h2 className="title">Find great food nearby with your friends</h2>
        <Plate className="plate-1" img={randomFood1} />
        <Plate className="plate-2" img={randomFood2} />
        <Plate className="plate-3" img={randomFood3} />
        <h5 className="title-bottom">Made with ❤️ by foodies</h5>
      </div>
    </div>
  );
}

export default HomePageLogo;
