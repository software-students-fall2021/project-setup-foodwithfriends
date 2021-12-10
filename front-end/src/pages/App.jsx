import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CreateRoom from "./CreateRoom";
import InviteCode from "./InviteCode";
import JoinRoom from "./JoinRoom";
import TeamPage from "./TeamPage";
import User from "./User";
import CuisineVote from './CuisineVote';
import ChooseCuisine from './ChooseCuisine';
import RandomCuisine from './RandomCuisine';
import WinningCuisine from './WinningCuisine';
import PreferredDishInitial from './PreferredDishInitial';
import PreferredDish from './PreferredDish';
import ResultsPage from "./ResultsPage";
import RestaurauntDetails from "../pages/RestaurantDetails";
import Wait from './Wait';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Error from './Error';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create" component={CreateRoom} exact />
        <Route path="/invite" component={InviteCode} exact />
        <Route path="/join" component={JoinRoom} exact />
        <Route path="/team" component={TeamPage} exact />
        <Route path="/new-user" component={User} exact />
        <Route path="/results" component={ResultsPage} exact />
        <Route path="/results/:restaurantId" component={RestaurauntDetails} exact />
        <Route path='/wait' component={Wait} exact />
        <Route path='/cuisine' component={CuisineVote} exact />
        <Route path='/choose' component={ChooseCuisine} exact />
        <Route path='/random' component={RandomCuisine} exact />
        <Route path='/win' component={WinningCuisine} exact />
        <Route path='/preferences' component={PreferredDishInitial} exact />
        <Route path='/choose-preferences' component={PreferredDish} exact />
        <Route path='/error' component={Error} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
