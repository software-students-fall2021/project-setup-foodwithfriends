import restaurant1 from "../img/restaurant1.jpg";
import restaurant2 from "../img/restaurant2.jpg";
import restaurant3 from "../img/restaurant3.jpg";
import restaurant4 from "../img/restaurant4.jpg";
import restaurant5 from "../img/restaurant5.jpg";
import restaurant6 from "../img/restaurant6.jpg";
import restaurant7 from "../img/restaurant7.jpg";
import restaurant8 from "../img/restaurant8.jpg";
import restaurant9 from "../img/restaurant9.jpg";
import restaurant10 from "../img/restaurant10.jpg";
import restaurant11 from "../img/restaurant11.jpg";

export function getRandomRestaurantImage(id) {
  const restaurantId = (id % 11) + 1;
  switch (restaurantId) {
    case 1:
      return restaurant1;
    case 2:
      return restaurant2;
    case 3:
      return restaurant3;
    case 4:
      return restaurant4;
    case 5:
      return restaurant5;
    case 6:
      return restaurant6;
    case 7:
      return restaurant7;
    case 8:
      return restaurant8;
    case 9:
      return restaurant9;
    case 10:
      return restaurant10;
    case 11:
      return restaurant11;
  }
}
