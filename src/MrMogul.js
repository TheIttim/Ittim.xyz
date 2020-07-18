import React from "react";
import MetaTags from "react-meta-tags";

export default class MrMogul extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Ittim | Mr. Mogul</title>
          <link rel="canonical" href="https://www.ittim.xyz/mrmogul" />
          <meta property="og:title" content="Ittim | Mr. Mogul" />
          <meta property="og:url" content="https://ittim.xyz/mrmogul" />
          <meta property="og:image" content="https://ittim.xyz/TM_icon.png" />
          <meta
            property="og:description"
            content="Welcome to Ittim.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Mr. Mogul
          </h3>

          <p>
            Mr. Mogul is the all-in-one utility bot for our Discord server, made to help new users
            understand who we are, and what we do, learn more about our projects, and incentivise
            them to stay active in our community! <br />
            <i>Side Note: It also allows us to punish the bad apples.</i>
          </p>
        </div>
      </div>
    );
  }
}
