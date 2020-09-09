import React from "react";
import MetaTags from "react-meta-tags";
import { Toast } from "primereact/toast";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    if (window.location.search === "?action=loggedout") this.showLoggedOut = true;
    if (window.location.search === "?action=loggedin") this.showLoggedIn = true;
    if (window.location.search === "?action=forbidden") this.showForbidden = true;
    if (window.location.search === "?action=unauthenticated") this.showUnAuth = true;
  }

  componentDidMount() {
    if (this.showLoggedOut) {
      this.toast.show({
        severity: "success",
        summary: "Success",
        detail: "Logged Out",
        life: 10000,
      });
    } else if (this.showLoggedIn) {
      this.toast.show({
        severity: "success",
        summary: "Success",
        detail: "Logged In",
        life: 10000,
      });
    } else if (this.showForbidden) {
      this.toast.show({
        severity: "error",
        summary: "Forbidden",
        detail: "You are not authorized to view that page!",
        life: 10000,
      });
    } else if (this.showUnAuth) {
      this.toast.show({
        severity: "error",
        summary: "Authentication Required",
        detail: "Authentication is required to view that page!",
        life: 10000,
      });
    }
  }

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
        <Toast ref={(el) => (this.toast = el)}></Toast>

        <div className="container text-center">
          <h3 style={{ marginTop: "2%" }}>We are Mogul Development</h3>
          <br />
          <h4>
            <b>About Us</b>
          </h4>
          <p>
            Mogul Development is the team responsible for the Tycoon Mogul family of software as
            well as Doghouse. Learn more about us on the About & Contact page, or join our Discord
            server to hang out with us and be among the first to try out our newest creations!
          </p>
          <br />
        </div>
      </div>
    );
  }
}
