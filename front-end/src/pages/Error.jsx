import './Error.css';

import React, { useEffect } from 'react';
import Button from "../components/Button";
import { Link } from "react-router-dom";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Error(props) {
  const [error, setError] = React.useState("undefined");
  const [group, setGroup] = React.useState("undefined");
  const [user, setUser] = React.useState("undefined");
  const [cuisine, setCuisine] = React.useState("undefined");
  const [keyword, setKeyword] = React.useState("undefined");
  const [next, setNext] = React.useState("/");

  const resetCookies = () => {
    cookies.remove("groupID");
    cookies.remove("groupName");
    cookies.remove("user");
    cookies.remove("cuisine");
    cookies.remove("keyword");
    cookies.remove("preferred");
    window.location.href = `${next}`;
  };

  useEffect(() => {
    const nextLink = props.location.state?.next ? props.location.state.next : "/";
    setNext(nextLink);
    setError(props.location.state?.error);
    setGroup(props.location.state?.group);
    setUser(props.location.state?.user);
    setKeyword(props.location.state?.keyword);
    setCuisine(props.location.state?.cuisine);
  });

  let component = null;

  switch (error) {
    case "group":
      component = <div>
        <h1 className="heading">Already in a group</h1>
        <p className="info">Uh oh...</p>
        <p className="info space-sides">It seems like you already joined a group called <span className="bold">{group}</span></p>
        <div className="button-group">
          <Button text="Leave Group" width="250px" height="50px" bg="#6e6d63" onClick={resetCookies} />
        </div>
      </div>;
      break;
    case "nogroup":
      component = <div>
        <h1 className="heading">No Group Found</h1>
        <p className="info">Please create or join a group before voting</p>
        <div className="button-group">
          <Link to="/create">
            <Button text="Create" width="250px" height="40px" bg="#b7b4a7" />
          </Link>
          <Link to="/join">
            <Button text="Join" width="250px" height="40px" bg="#787567" />
          </Link>
        </div>
      </div>;
      break;
    case "user":
      component = <div>
        <h1 className="heading">Already set name</h1>
        <p className="info space-sides">Hey <span className="bold">{user}</span>, It seems like you are registered already :)!</p>
        <p className="info space-sides space-top">If this is a mistake, reset your current session with us.</p>
        <div className="button-group">
          <Button text="Reset" width="250px" height="50px" bg="#6e6d63" onClick={resetCookies} />
        </div>
      </div>;
      break;
    case "nouser":
      component = <div>
        <h1 className="heading">No User Found</h1>
        <p className="info space-sides"> Please set your user information before continuing </p>
        <div className="button-group">
          <Link to="/new-user">
            <Button text="Set User Info" width="250px" height="50px" bg="#6e6d63" />
          </Link>
        </div>
      </div>;
      break;
    case "cuisine":
      component = <div>
        <h1 className="heading">Already Voted</h1>
        <p className="info space-sides">You already chose a cuisine. <span className="bold cap-init">{cuisine}</span> food sounds delicious!</p>
        <div className="button-group">
          <Link to="/win">
            <Button text="View Winner" width="250px" height="50px" bg="#6e6d63" />
          </Link>
        </div>
      </div>
      break;
    case "nocuisine":
      component = <div>
        <h1 className="heading">No Cuisine found</h1>
        <p className="info space-sides">It seems like you have not voted for a cuisine</p>
        <div className="button-group">
          <Link to="/cuisine">
            <Button text="Vote" width="250px" height="50px" bg="#6e6d63" />
          </Link>
        </div>
      </div>
      break;
    case "preferredkey":
      component = <div>
        <h1 className="heading">Already selected keyword</h1>
        <p className="info space-sides space-top">Your search keyword is <span className="bold">{keyword}</span></p>
        <div className="button-group">
          <Link to="/choose-preferences">
            <Button text="Select Preferences" width="250px" height="50px" bg="#6e6d63" />
          </Link>
        </div>
      </div>
      break;

    case "nopreferredkey":
      component = <div>
        <h1 className="heading">No Keyword Found</h1>
        <p className="info space-sides">Please input a keyword that relates to your preferred dishes.</p>
        <div className="button-group">
          <Link to="/preferences">
            <Button text="Submit Keyword" width="250px" height="50px" bg="#6e6d63" />
          </Link>
        </div>
      </div>
      break;
    case "preferred":
      component = <div>
        <h1 className="heading">Already selected preferences</h1>
        <p className="info space-sides space-top">You already chose your dish preferences. Proceed to check out your group&apos;s restaurant results.</p>
        <div className="button-group">
          <Link to="/results">
            <Button text="See Results" width="250px" height="50px" bg="#6e6d63" />
          </Link>
        </div>
      </div>
      break;
    default:
      component = <div>
        <h1 className="heading">404 Page Not Found</h1>
      </div>;
  }

  return (
    <div className="Error">
      {component}
    </div>
  );
}

export default Error;
