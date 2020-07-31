import React from "react";
import MetaTags from "react-meta-tags";

export default class contact extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Ittim | Contact</title>
          <link rel="canonical" href="https://www.ittim.xyz/contact" />
          <meta property="og:title" content="Ittim | Contact" />
          <meta property="og:url" content="https://ittim.xyz/contact" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
          <meta
            property="og:description"
            content="Welcome to Ittim.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Contact
          </h3>
          <p>
            Have an issue or wanna join our team?<br></br>
            For general support email <a href="mailto:support@ittim.xyz">support@ittim.xyz</a>.<br></br> 
            For development related questions, or to join our development team, email our Development Team Lead at <a href="mailto:puyodead1@ittim.xyz">puyodead1@ittim.xyz</a>.<br></br>
            For Moderation related questions, or for any reports about our moderation team, including joining, email our Moderation Team Lead at <a href="mailto:xiuh@ittim.xyz">xiuh@ittim.xyz</a>.<br></br>
            To appeal a server ban or product blacklist, please send an email to <a href="mailto:appeals@ittim.xyz">appeals@ittim.xyz</a>, explaining why you should be unbanned or unblacklisted.<br></br>
            For any business, legal, or other matters you can email me directly at <a href="mailto:ittim@ittim.xyz">ittim@ittim.xyz</a>.<br></br>
            Or, if you just want to keep up with our team, you can check us out on <a href="https://twitter.com/MogulDevs">Twitter</a>, or hang out with us on <a href="https://discord.gg/Ef2AQns" target="blank_" rel="noopener noreferrer">
            Discord</a>!
          </p>
        </div>
      </div>
    );
  }
}
