import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Candidates from "./Candidates";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/shortlist">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/reject">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/:id" children={<Candidates />} />

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
