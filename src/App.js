import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from "./Contact/Contact";

import UserScreen from "./User/UserScreen";

function App() {
  return (
    <Router>
   

      <Switch>
        <Route exact path="/">
          <Contact />
        </Route>
        <Route  exact path="/user/:id">
          <UserScreen />
        </Route>
       
      </Switch>
    
  </Router>
  );
}

export default App;
