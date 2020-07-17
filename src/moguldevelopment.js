import React from "react";
import MetaTags from "react-meta-tags";

export default class ECTech extends React.Component {
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
          <h1 className="title" style={{ marginTop: "2%" }}>
            Mogul Development LLC
          </h1>
          <p>
           MogulDevelopment is the company that owns everything here, I founded it under a different name on November 8, 2019 so I could use it for whatever I needed, now it is the name under which everything TycoonMogul releated is associated. Currently I am the only member of said company, and it has no stable income, but I have plans to change that in the near future, starting with this website!
          </p>
        </div>
      </div>
    );
  }
}
