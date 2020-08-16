import React from "react";
import MetaTags from "react-meta-tags";

export default class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Mogul Development | Homepage</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/" />
          <meta property="og:title" content="Ittim | Homepage" />
          <meta property="og:url" content="https://moguldevs.xyz/" />
          <meta property="og:image" content="https://moguldevs.xyz/Profile_Picture.png" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 style={{ marginTop: "2%" }}>We are Mogul Development</h3>
          <br />
          <h4>
            <b>About Us</b>
          </h4>
          <p>
            Mogul Development is the team responsible for the Tycoon Mogul family of software as well as Doghouse. Learn more about us on the About & Contact page, or join our Discord server to hang out with us and be among the first to try out our newest creations!
          </p>
          <br />

        </div>
      </div>
    );
  }
}
