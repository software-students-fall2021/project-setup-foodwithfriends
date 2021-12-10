import "./PreferredDish.css";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import Button from "../components/Button";
import { get } from "../utils/request";
import Cookies from "universal-cookie";
import { post } from "../utils/request";

const cookies = new Cookies();

function PreferredDish() {
  const [dishes, setdishes] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [loaded, setLoad] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const [activeItem, setItem] = React.useState(-1);
  const history = useHistory();

  const fetchDishes = async () => {
    console.log("currently fetching....");
    const response = await get("/documenu/dishes", {
      groupID: cookies.get("groupID"),
      cuisine: cookies.get("cuisine"),
      searchKeyword: cookies.get("keyword"),
    });

    if (response.data.length == 0) {
      setLoad(true);
      return;
    }

    setdishes(response.data);
  };

  function routeToWait() {
    history.push({
      pathname: "/wait",
      state: { firstWaitingRoom: false },
    });
  }

  const submitDish = async (dish, skip = false) => {
    const response = await post("/preferred", {
      userID: cookies.get("userID"),
      dish: dish,
      skip: skip,
      groupID: cookies.get("groupID")
    });
    if (response.valid) {
      routeToWait();
    }
  };

  const submitOptions = () => {
    const inputs = document.querySelectorAll("input[type='checkbox']");
    let chosenDishes = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        chosenDishes.push(inputs[i].value);
      }
    }
    if (chosenDishes.length == 0) {
      setErrorMessage("Choose at least one dish");
    } else {
      // otherwise save dishes #107
      submitDish(chosenDishes);
      cookies.set("preferred", true);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  if (!cookies.get("groupID")) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { error: "nogroup" },
        }}
      />
    );
  }

  if (!cookies.get("user")) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { error: "nouser" },
        }}
      />
    );
  }

  if (!cookies.get("cuisine")) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { error: "nocuisine", next: "/cuisine" },
        }}
      />
    );
  }

  if (!cookies.get("keyword")) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { error: "nopreferredkey" },
        }}
      />
    );
  }

  if (cookies.get("preferred")) {
    return (
      <Redirect
        to={{
          pathname: "/error",
          state: { error: "preferred" },
        }}
      />
    );
  }

  return (
    <div className="PreferredDish">
      <Button id="skipButton" text="skip" width="65px" height="30px" bg="#9d9287"
        onClick={() => {
          submitDish([], true);
        }}
      />

      {dishes.length != 0 && (
        <div>
          <p id="title"> Select your preferred dish </p>
          {errorMessage !== "" && (
            <div className="dish-error">{errorMessage}</div>
          )}
          <div id="checkbox-group">
            {dishes.map((dish, i) => (
              <div className="pref-content-box" key={i}>
                <div
                  className={
                    isActive && i == activeItem
                      ? "pref-dish-row activate-color"
                      : "pref-dish-row"
                  }
                >
                  <input type="checkbox" value={dish.id}></input>
                  <label
                    onClick={() => {
                      if (isActive) {
                        setActive(false);
                        return;
                      }
                      setActive(true);
                      setItem(i);
                    }}
                  >
                    {dish.name}
                  </label>
                </div>

                <div
                  className={
                    isActive && i == activeItem ? "content active" : "content"
                  }
                >
                  <p>{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button  id="select-btn" text="Select" width="350px" height="40px"
            onClick={submitOptions}
          />
          <Link to="/preferences">
            <Button
              text="New Search"
              width="350px"
              height="40px"
              bg="#d1c8c8"
              onClick={() => {
                cookies.remove("keyword");
                cookies.remove("preferred");
              }}
            />
          </Link>
        </div>
      )}
      {dishes.length == 0 && !loaded && (
        <div className="loader">
          <p>Loading....</p>
        </div>
      )}

      {dishes.length == 0 && loaded && (
        <div className="Error" id ="dish-error">
          <h1 className="heading">No Dish Results Found</h1>
          <p className="info space-sides space-top">
            Try searching with a different keyword to populate this list.
          </p>
          <div className="button-group">
            <Link to="/preferences">
              <Button text="Try Again" width="250px" height="50px" bg="#6e6d63"
                onClick={() => {
                  cookies.remove("keyword");
                  cookies.remove("preferred");
                }}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreferredDish;
