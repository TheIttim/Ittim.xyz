import React from "react";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import ECTech from "./ECTech";
import Home from "./Home";
import ItCast from "./ItCast";
import ProfilePicture from "./pfp.png";
import Status from "./Status/Status";
import "./Styles.css";
import TycoonMogul from "./TycoonMogul";
import Resume from "./Resume";

export default class App extends React.Component {
  componentDidMount() {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.querySelector(".navbar-menu");
    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar is-dark navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item image is-64x64" href="/">
                <img src={ProfilePicture} className="is-rounded" alt="ittim avatar" />
              </a>
              {/* eslint-disable-next-line */}
              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasic"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarBasic" className="navbar-menu">
              <div className="navbar-start">
                <NavLink
                  to="/"
                  className="navbar-item has-text-info"
                  activeClassName="is-active"
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/itcast"
                  className="navbar-item has-text-info"
                  activeClassName="is-active"
                  exact
                >
                  ItCast
                </NavLink>
                <NavLink
                  to="/tm"
                  className="navbar-item has-text-info"
                  activeClassName="is-active"
                  exact
                >
                  TycoonMogul
                </NavLink>
                <NavLink
                  to="/ectech"
                  className="navbar-item has-text-info"
                  activeClassName="is-active"
                  exact
                >
                  EC Tech LLC
                </NavLink>
                <NavLink
                  to="resume"
                  className="navbar-item has-text-info"
                  activeClassName="is-active"
                  exact
                >
                  Resume/Portfolio
                </NavLink>
                <NavLink
                  to="status"
                  className="navbar-item has-text-info"
                  activeClassName="is-active"
                  exact
                >
                  TM Status
                </NavLink>
                <a
                  href="https://discord.gg/Ef2AQns"
                  className="navbar-item has-text-info"
                  target="blank_"
                >
                  Discord Server
                </a>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/itcast">
              <ItCast />
            </Route>
            <Route path="/tm">
              <TycoonMogul />
            </Route>
            <Route path="/status">
              <Status />
            </Route>
            <Route path="/ectech">
              <ECTech />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
