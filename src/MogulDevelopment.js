import React from "react";
import MetaTags from "react-meta-tags";

export default class MogulDevelopment extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Ittim | Mogul Development</title>
          <link rel="canonical" href="https://www.ittim.xyz/moguldevelopment" />
          <meta property="og:title" content="Ittim | Mogul Development" />
          <meta property="og:url" content="https://ittim.xyz/moguldevelopment" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
          <meta
            property="og:description"
            content="Welcome to Ittim.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Mogul Development LLC
          </h3>
          <p>
            Mogul Development, founded November 8, 2019, is the development team responsible for the
            TycoonMogul family of applications.
          </p>
        </div>
      </div>
    );
  }
}
