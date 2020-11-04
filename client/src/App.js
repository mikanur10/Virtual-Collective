import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./screens/Homepage/Homepage";
import EventPage from "./screens/EventPage/EventPage";
import DetailedPage from "./screens/DetailedPage/DetailedPage";
import WaitingRoom from "./screens/WaitingRoom/WaitingRoom";
import AddEventPage from "./screens/AddEventPage/AddEventPage";
import FavoritesPage from "./screens/FavoritesPage/FavoritesPage";
import EditEventPage from "./screens/EditEventPage/EditEventPage";
import AllUpcoming from "./screens/AllUpcoming/AllUpcoming";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/events/arts" component={EventPage} />
        <Route exact path="/events/:_id" component={DetailedPage} />
        <Route exact path="/events/:_id/event" component={WaitingRoom} />
        <Route path="/create" component={AddEventPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route exact path="/events/:_id/edit" component={EditEventPage} />
        <Route exact path="/upcoming" component={AllUpcoming} />
      </Switch>
    </div>
  );
};

export default App;
