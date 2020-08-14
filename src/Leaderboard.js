import React from "react";
import MetaTags from "react-meta-tags";
import AllianceMemberLB from "./Leaderboards/AllianceMembers.js";
import BalanceLB from "./Leaderboards/Balance";
import CachingNotification from "./Leaderboards/CachingNotification.js";
import TycoonLevelLB from "./Leaderboards/TycoonLevel.js";
import UserLevelLB from "./Leaderboards/UserLevel.js";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "balance" };

    this.onClick = this.onClick.bind(this);
  }

  onClick = (e) => {
    const type = e.target.dataset.type;
    this.setState({ type });
  };

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
        <MetaTags>
          <title>Mogul Development | Leaderboards</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/leaderboard/balance" />
          <meta property="og:title" content="Ittim | Leaderboard" />
          <meta property="og:url" content="https://moguldevs.xyz/leaderboard/balance" />
          <meta property="og:image" content="https://moguldevs.xyz/TM_icon.png" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <div className="row">
            <div className="col-3"></div>
            <div className="leaderboard-nav col row">
              <div className="leaderboard-section col">
                <button
                  className={`leaderboard-link btn btn-first ${
                    this.state.type === "balance" ? "leaderboardnav-active" : ""
                  }`}
                  data-type="balance"
                  onClick={this.onClick}
                >
                  Balance
                </button>
              </div>
              <div className="leaderboard-section col" style={{ color: "#ffffff" }}>
                <button
                  className={`leaderboard-link btn ${
                    this.state.type === "userlevel" ? "leaderboardnav-active" : ""
                  }`}
                  data-type="userlevel"
                  onClick={this.onClick}
                >
                  User Level
                </button>
              </div>
              <div className="leaderboard-section col">
                <button
                  className={`leaderboard-link btn ${
                    this.state.type === "tycoonlevel" ? "leaderboardnav-active" : ""
                  }`}
                  data-type="tycoonlevel"
                  onClick={this.onClick}
                >
                  Tycoon Level
                </button>
              </div>
              <div className="leaderboard-section col">
                <button
                  className={`leaderboard-link btn btn-last ${
                    this.state.type === "alliancemembers" ? "leaderboardnav-active" : ""
                  }`}
                  data-type="alliancemembers"
                  onClick={this.onClick}
                >
                  Alliance Members
                </button>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <CachingNotification />
          {a}
        </div>
      </div>
    );
  }
}
