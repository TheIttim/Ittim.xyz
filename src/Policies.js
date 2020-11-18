import React from "react";
import { Helmet } from "react-helmet";

export default class Policies extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Mogul Development | Privacy Policy</title>
          <meta name="title" content="Mogul Development | Privacy Policy" />
          <meta
            name="description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://moguldevs.xyz/policies" />
          <meta
            property="og:title"
            content="Mogul Development | Privacy Policy"
          />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="og:image" content="/Profile_Picture.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://moguldevs.xyz/policies"
          />
          <meta
            property="twitter:title"
            content="Mogul Development | Privacy Policy"
          />
          <meta
            property="twitter:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="twitter:image" content="/Profile_Picture.png" />
        </Helmet>
        <div className="container text-center">
          <iframe
            src="/md_policies/privacypolicy.html"
            title="Privacy Policy"
            width="100%"
            height={500}
            style={{ border: "none", backgroundColor: "white", marginTop: 20 }}
          />

          <iframe
            src="/md_policies/termsandconditions.html"
            title="Terms and Conditions"
            width="100%"
            height={500}
            style={{ border: "none", backgroundColor: "white", marginTop: 20 }}
          />

          <iframe
            src="/md_policies/cookiepolicy.html"
            title="Cookie Policy"
            width="100%"
            height={500}
            style={{ border: "none", backgroundColor: "white", marginTop: 20 }}
          />
        </div>
      </div>
    );
  }
}
