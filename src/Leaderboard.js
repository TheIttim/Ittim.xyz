import React from "react";
import { Helmet } from "react-helmet";
import AllianceMemberLB from "./Leaderboards/AllianceMembers.js";
import BalanceLB from "./Leaderboards/Balance";
import TycoonLevelLB from "./Leaderboards/TycoonLevel.js";
import UserLevelLB from "./Leaderboards/UserLevel.js";
import { Messages } from "primereact/messages";
import PrimeReact from "primereact/utils";
import { Ripple } from "primereact/ripple";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "balance" };

    this.onClick = this.onClick.bind(this);

    PrimeReact.ripple = true;
  }

  onClick = (e) => {
    const type = e.target.dataset.type;
    this.setState({ type });
  };

  componentDidMount() {
    this.messages.show({
      severity: "warn",
      summary:
        "Some avatars may be broken, this is a known issue related to changing avatars.",
      closable: false,
      sticky: true,
      life: null,
    });
  }

  render() {
    let a;
    if (this.state.type === "balance") {
      a = <BalanceLB />;
    } else if (this.state.type === "userlevel") {
      a = <UserLevelLB />;
    } else if (this.state.type === "tycoonlevel") {
      a = <TycoonLevelLB />;
    } else if (this.state.type === "alliancemembers") {
      a = <AllianceMemberLB />;
    }

    return (
      <div className="app">
        <Helmet>
          <title>Mogul Development | Leaderboards</title>
          <meta name="title" content="Mogul Development | Leaderboards" />
          <meta
            name="description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://moguldevs.xyz/leaderboards"
          />
          <meta
            property="og:title"
            content="Mogul Development | Leaderboards"
          />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="og:image" content="/Profile_Picture.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://moguldevs.xyz/leaderboards"
          />
          <meta
            property="twitter:title"
            content="Mogul Development | Leaderboards"
          />
          <meta
            property="twitter:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="twitter:image" content="/Profile_Picture.png" />
        </Helmet>
        <div className="container text-center">
          <div className="row">
            <div className="col-3"></div>
            <div className="leaderboard-nav col row">
              <div className="leaderboard-section col">
                <button
                  className={`leaderboard-link btn btn-first p-ripple ${
                    this.state.type === "balance" ? "leaderboardnav-active" : ""
                  }`}
                  data-type="balance"
                  onClick={this.onClick}
                >
                  Balance
                  <Ripple />
                </button>
              </div>
              <div
                className="leaderboard-section col"
                style={{ color: "#ffffff" }}
              >
                <button
                  className={`leaderboard-link btn p-ripple ${
                    this.state.type === "userlevel"
                      ? "leaderboardnav-active"
                      : ""
                  }`}
                  data-type="userlevel"
                  onClick={this.onClick}
                >
                  User Level
                  <Ripple />
                </button>
              </div>
              <div className="leaderboard-section col">
                <button
                  className={`leaderboard-link btn p-ripple ${
                    this.state.type === "tycoonlevel"
                      ? "leaderboardnav-active"
                      : ""
                  }`}
                  data-type="tycoonlevel"
                  onClick={this.onClick}
                >
                  Tycoon Level
                  <Ripple />
                </button>
              </div>
              <div className="leaderboard-section col">
                <button
                  className={`leaderboard-link btn btn-last p-ripple ${
                    this.state.type === "alliancemembers"
                      ? "leaderboardnav-active"
                      : ""
                  }`}
                  data-type="alliancemembers"
                  onClick={this.onClick}
                >
                  Alliance Members
                  <Ripple />
                </button>
              </div>
            </div>
            <div className="col-3"></div>
          </div>

          <Messages ref={(el) => (this.messages = el)}></Messages>
          {a}
        </div>
      </div>
    );
  }
}
