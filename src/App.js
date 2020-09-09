import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import ProfilePicture from "./pfp.png";
import Status from "./Status/Status";
import DevDash from "./DevDash";
import TycoonMogul from "./TycoonMogul";

import { ThemeChooser } from "@puyodead1/react-bootstrap-theme-switcher/lib/ThemeChooser";
import "./Styles.css";
import Leaderboard from "./Leaderboard";
import Alliance from "./Alliance";
import Donors from "./Donors";
import PrivacyPolicy from "./PrivacyPolicy";
import Doghouse from "./Doghouse";
import Profile from "./Profile";
import UserSearch from "./User";
import config from "./config";

// styling for devdash
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import LoginCallback from "./LoginCallback";

const { OAUTH, API_URL, OWNERS } = config;

const PageNotFound = () => {
  return (
    <div className="text-center not-found">
      <h3>(╯°□°)╯︵ ┻━┻</h3>
      <h4>We couldn't find that page!</h4>
    </div>
  );
};

const Forbidden = () => {
  // is logged in but is not an owner
  return (
    <div className="text-center not-found">
      <h3>(╯°□°)╯︵ ┻━┻</h3>
      <h4>403 - You are not authorized to view that page!</h4>
    </div>
  );
};

const Unauthorized = () => {
  // not even logged in
  return (
    <div className="text-center not-found">
      <h3>(╯°□°)╯︵ ┻━┻</h3>
      <h4>401 - You are not authenticated to view that page!</h4>
    </div>
  );
};

const isLoggedIn = () => {
  return window.localStorage.getItem("user");
};

const isAuthenticated = () => {
  const user = GetUser();

  if (user && OWNERS.includes(user.id)) {
    return true;
  } else return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? (
        isAuthenticated() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/?action=forbidden" />
        )
      ) : (
        <Redirect to="/?action=unauthenticated" />
      )
    }
  />
);

const GetUser = () => {
  const userD = window.localStorage.getItem("user");
  if (userD) {
    return JSON.parse(userD);
  } else return null;
};

const GetUserAvatarURL = () => {
  const user = GetUser();
  if (user) {
    if (user.avatar) {
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`;
    } else {
      // return the default avatar for the user
      return `https://cdn.discordapp.com/embed/avatars/${user.id}/${
        user.discriminator % 5
      }.png?size=2048`;
    }
  } else return null;
};

const AuthenticatedUser = () => {
  return (
    <li className="nav-item dropdown dropdown1" style={{ paddingLeft: "1rem" }}>
      <div
        className="row dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{
          marginRight: "1.5rem",
          marginTop: ".5rem",
          paddingLeft: "1rem",
          marginBottom: "0",
        }}
      >
        <div className="col" style={{ marginRight: "1rem" }}>
          {/* image */}
          <img
            alt="user avatar"
            src={GetUserAvatarURL()}
            class="rounded-circle"
            width="30"
            height="30"
          />
        </div>
        <div className="col" style={{ minWidth: "auto" }}>
          {GetUser().username}
        </div>
      </div>
      <div className="dropdown-menu dropdown-menu1" aria-labelledby="navbarDropdown">
        {isAuthenticated() ? (
          <NavLink to="/devdash" className="dropdown-item" activeClassName="active">
            Dev Dash
          </NavLink>
        ) : null}
        <NavLink to={`/user/${GetUser().id}`} className="dropdown-item" activeClassName="active">
          Profile
        </NavLink>
        <NavLink to="/logout" className="dropdown-item" activeClassName="active">
          Logout
        </NavLink>
      </div>
    </li>
  );
};

const App = () => {
  const handleDiscordLogin = useCallback(async () => {
    const qParams = [
      `client_id=${OAUTH.CLIENT_ID}`,
      `redirect_uri=${OAUTH.REDIRECT_URI}`,
      `scope=${OAUTH.SCOPE}`,
      `prompt=none`,
    ].join("&");
    try {
      const res = await fetch(`${API_URL}/api/oauth/url?${qParams}`);
      const url = await res.json();
      window.location.assign(url.url);
    } catch (e) {
      console.error(e);
    }
  }, []);

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
            {window.location.pathname !== "/login/callback" ? (
              isLoggedIn() ? (
                AuthenticatedUser()
              ) : (
                <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ borderRadius: "1rem", backgroundColor: "#4673a3", width: "6rem" }}
                    onClick={handleDiscordLogin}
                  >
                    Login
                  </button>
                </li>
              )
            ) : null}
            <li style={{ padding: "1rem" }} className="nav-item">
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
        <PrivateRoute path="/devdash" component={DevDash} exact />
        <Route
          name="logout"
          path="/logout"
          component={() => {
            window.localStorage.removeItem("user");
            window.localStorage.removeItem("token");
            // TODO: revoke token
            window.location.assign("/?action=loggedout");
            // TODO: a toast would be nice
            return null;
          }}
          exact
        />
        <Route name="login_callback" path="/login/callback" component={LoginCallback} />
        <Route name="allianceviewer" path="/alliances/*" component={Alliance} />
        <Route name="usersearch" path="/user" exact={true} component={UserSearch} />
        <Route name="profileviewer" path="/user/*" component={Profile} />
        {/* <Route name="forbidden" path="/403" component={Forbidden} exact></Route>
        <Route name="unauthorized" path="/401" component={Unauthorized} exact></Route> */}
        <Route component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
};

export default App;
