import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Styles.css";
import Home from "./components/home.js";
import People from "./components/people.js";
import Profile from "./components/profile";
import Admin from "./components/admin";
import FAQ from "./components/faq";
import Footer from "./components/footer.js";
import PageNotFound from "./components/page-not-found.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to={"/"} className="navbar-content-link">
              Home
            </Link>
          </div>
          <div className="navbar-content">
            <div className="navbar-content-item">
              <Link to={"/people"} className="navbar-content-link">
                People
              </Link>
            </div>
            <div className="navbar-content-item">
              <Link to={"/profile"} className="navbar-content-link">
                Profile
              </Link>
            </div>
            <div className="navbar-content-item">
              <Link to={"/faq"} className="navbar-content-link">
                FAQ
              </Link>
            </div>
          </div>
        </nav>
        <div className="divider"/>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={People} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/faq" component={FAQ} />
            <Route path="/404" component={PageNotFound} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
