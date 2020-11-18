import React from "react";
import { Helmet } from "react-helmet";

export default class Donors extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Mogul Development | Donors</title>
          <meta name="title" content="Mogul Development | Donors" />
          <meta
            name="description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://moguldevs.xyz/donors" />
          <meta property="og:title" content="Mogul Development | Donors" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="og:image" content="/Profile_Picture.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://moguldevs.xyz/donors" />
          <meta property="twitter:title" content="Mogul Development | Donors" />
          <meta
            property="twitter:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="twitter:image" content="/Profile_Picture.png" />
        </Helmet>
        <div class="container text-center">
          <h3 style={{ marginTop: "2%" }}>Donors</h3>
          <hr />
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg col-sm-12">
              <i className="patron-plus">Patron+</i>
            </div>
            <div className="col-lg col-sm-12">
              <i className="patron">Patron</i>
            </div>
            <div className="col-lg col-sm-12">
              <i className="donor-paypal">PayPal</i>
            </div>
            <div className="col-lg-3"></div>
          </div>
          <br />
          <h5>Our Donors</h5>
          <i>We don't have any donors yet; how about becoming the first?</i>
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
