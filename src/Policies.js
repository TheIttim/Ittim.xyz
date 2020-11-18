import React from "react";
import MetaTags from "react-meta-tags";

export default class Policies extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Mogul Development | Policies</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/policies" />
          <meta
            property="og:title"
            content="Mogul Development | Privacy Policy"
          />
          <meta property="og:url" content="https://moguldevs.xyz/policies" />
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
