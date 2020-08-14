import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import ProfilePicture from "./pfp.png";
import Status from "./Status/Status";
import TycoonMogul from "./TycoonMogul";
import { ThemeChooser } from "@puyodead1/react-bootstrap-theme-switcher/lib/ThemeChooser";
import "./Styles.css";
import Leaderboard from "./Leaderboard";
import Alliance from "./Alliance";
import Donors from "./Donors";
import PrivacyPolicy from "./PrivacyPolicy";
import Doghouse from "./Doghouse";
import Profile from "./Profile";

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
              <li className="nav-item"></li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                  About & Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown dropdown1">
                <a
                  className="nav-link dropdown-toggle"
                  href="/tycoonmogul"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  TycoonMogul
                </a>
                <div className="dropdown-menu dropdown-menu1" aria-labelledby="navbarDropdown">
                  <NavLink to="/tycoonmogul" className="dropdown-item" activeClassName="active">
                    Information
                  </NavLink>
                  <NavLink to="/status" className="dropdown-item" activeClassName="active">
                    Status
                  </NavLink>
                  <NavLink to="/leaderboards" className="dropdown-item" activeClassName="active">
                    Leaderboards
                  </NavLink>
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=519954424270028811&scope=bot&permissions=380096"
                    className="dropdown-item"
                    target="blank_"
                  >
                    Invite
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/doghouse" className="nav-link" activeClassName="active">
                  Doghouse
                </NavLink>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <NavLink to="/donors" className="nav-link" activeClassName="active">
                  Donors
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="https://discord.gg/Ef2AQns" className="nav-link" target="blank_">
                  Discord Server
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/privacy" className="nav-link" activeClassName="active">
                  Privacy Policy
                </NavLink>
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
          <Route path="/tycoonmogul" exact>
            <TycoonMogul />
          </Route>
          <Route path="/status" exact>
            <Status />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/status" exact>
            <Status />
          </Route>
          <Route path="/leaderboards" exact>
            <Leaderboard />
          </Route>
          <Route path="/privacy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/donors" exact>
            <Donors />
          </Route>
          <Route path="/doghouse" exact>
            <Doghouse />
          </Route>
          <Route name="allianceviewer" path="/alliances/*" component={Alliance} />
          <Route name="profileviewer" path="/user/*" component={Profile} />
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    );
  }
}
