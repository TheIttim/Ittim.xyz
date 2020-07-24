import React from "react";
import MetaTags from "react-meta-tags";

export default class Patrons extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Ittim | Donors</title>
          <link rel="canonical" href="https://www.ittim.xyz/donors" />
          <meta property="og:title" content="Ittim | Donors" />
          <meta property="og:url" content="https://ittim.xyz/donors" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />\
          <meta
            property="og:description"
            content="Welcome to Ittim.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div class="container text-center">
          <h3 style={{ marginTop: "2%" }}>Donors</h3>
          <hr />
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg col-sm-12">
              <i className="patron-plus">Patron+</i>
            </div>
            <div className="col-lg col-sm-12">
              <i className="patron">Patron</i>
            </div>
      <div className="col-lg col-sm-12">
              <i className="paypal">PayPal</i>
            </div>
      <div className="col-lg col-sm-12">
              <i className="MCDonor">Minecraft Donor</i>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <br />
          <h5>Our Patrons</h5>
          <i>We don't have any Patrons yet; how about becoming the first?</i>
          {/* <div className="patron-plus">
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <ul>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                </ul>
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="patron">
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <ul>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                  <li>John Doe</li>
                </ul>
              </div>
              <div className="col"></div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
