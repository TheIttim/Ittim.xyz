import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ECTech from "./ECTech";
import Home from "./Home";
import ItCast from "./ItCast";
import ProfilePicture from "./pfp.png";
import Status from "./Status/Status";
import TycoonMogul from "./TycoonMogul";
import Resume from "./Resume";
import { ThemeChooser } from "@puyodead1/react-bootstrap-theme-switcher/lib/ThemeChooser";
import "./Styles.css";

const PageNotFound = () => {
  return (
    <div className="text-center not-found">
      <h3>(╯°□°)╯︵ ┻━┻</h3>
      <h4>We couldn't find that page!</h4>
    </div>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            <img
              alt="Ittim's Avatar"
              src={ProfilePicture}
              width="30"
              height="30"
              className="rounded-circle"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/itcast" className="nav-link" activeClassName="active">
                  ItCast
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tm" className="nav-link" activeClassName="active">
                  TycoonMogul
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resume" className="nav-link" activeClassName="active">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/status" className="nav-link" activeClassName="active">
                  Status
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="https://discord.gg/Ef2AQns" className="nav-link" target="blank_">
                  Discord Server
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=519954424270028811&scope=bot&permissions=380096"
                  className="nav-link"
                  target="blank_"
                >
                  Invite
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto themetoggle">
              <li>
                <ThemeChooser></ThemeChooser>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/itcast" exact>
            <ItCast />
          </Route>
          <Route path="/tm" exact>
            <TycoonMogul />
          </Route>
          <Route path="/status" exact>
            <Status />
          </Route>
          <Route path="/ectech" exact>
            <ECTech />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/status" exact>
            <Status />
          </Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    );
  }
}
