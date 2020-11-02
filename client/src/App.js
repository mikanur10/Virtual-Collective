import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Homepage from "./screens/Homepage/Homepage";
import EventPage from "./screens/EventPage/EventPage";
// import ProductCreate from "./screens/ProductCreate/ProductCreate";
// import ProductEdit from "./screens/ProductEdit/ProductEdit";
// import ProductDetail from "./screens/ProductDetail/ProductDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/events/:category" component={EventPage} />
        {/* <Route path="/add-product" component={ProductCreate} />
        <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} /> */}
      </Switch>
    </div>
  );
};

export default App;
