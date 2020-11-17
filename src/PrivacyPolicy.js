import React from "react";
import MetaTags from "react-meta-tags";

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Ittim | Privacy Policy</title>
          <link
            rel="canonical"
            href="https://www.moguldevs.xyz/privacypolicy"
          />
          <meta property="og:title" content="Ittim | Privacy Policy" />
          <meta
            property="og:url"
            content="https://moguldevs.xyz/privacypolicy"
          />
          <meta
            property="og:image"
            content="https://moguldevs.xyz/Profile_Picture.png"
          />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <iframe
            src="/privacypolicy.html"
            title="Privacy Policy"
            width="100%"
            height={500}
            style={{ border: "none", color: "white" }}
          />
        </div>
      </div>
    );
  }
}
