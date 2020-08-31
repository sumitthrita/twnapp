import React from "react";
// import './App.css';
import Homepage from "./components/Homepage";
import Blog from "./components/Blog";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Homepage />
        <Route exact path="/Home" component={Homepage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Blog" component={Blog} />
      </Switch>

      {/* <Route path="/Homepage" exact component={Homepage} />
        <Route path="/Blog" exact component ={Blog} /> */}
    </BrowserRouter>
  );
};
export default App;
