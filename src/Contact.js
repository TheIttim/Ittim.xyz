import React from "react";
import MetaTags from "react-meta-tags";

export default class contact extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Mogul Development | Contact</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/contact" />
          <meta property="og:title" content="Ittim | Contact" />
          <meta property="og:url" content="https://moguldevs.xyz/contact" />
          <meta property="og:image" content="https://moguldevs.xyz/Profile_Picture.png" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, The website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <section>
            <h3 className="title" style={{ marginTop: "2%" }}>
              We are Mogul Development
            </h3>
            <h4>A small team that creates big products!</h4>
            <p>
              Our flagship is{" "}
              <a
                href="https://moguldevs.xyz/tycoonmogul"
                target="_blank"
                whateeverthatnoreferthingwas
              >
                TycoonMogul
              </a>
              , a{" "}
              <a href="https://discord.com" target="_blank" whateeverthatnoreferthingwas>
                Discord
              </a>{" "}
              bot bringing entertainment to hundreds of servers via an idle tycoon type gaming
              experience!
            </p>
            <p>
              <span className="lead">Our team is comprised of 3 people:</span>
              <br />
              <ul style={{ float: "left", textAlign: "left", listStyle: "circle" }}>
                <li>
                  {" "}
                  <b>Ittim</b>, the founder/owner, also known as the guy who pays the bills{" "}
                  <small>
                    <i>
                      (Hey, speaking of, you should check out our Patreon or PayPal, we could use
                      the support)
                    </i>
                  </small>
                </li>
                <li>
                  <b>Puyodead1</b>, the godly developer who makes <i>most</i> of Ittim's dreams a
                  reality
                </li>
                <li>
                  <b>XiuhcoatlSlayer</b>, who is in charge of the team that moderates our public
                  spaces, like our{" "}
                  <a href="https://discord.gg/Ef2AQns" target="_blank" whateeverthatnoreferthingwas>
                    Discord Server
                  </a>
                  , she is also the developer of{" "}
                  <a
                    href="https://moguldevs.xyz/doghouse"
                    target="_blank"
                    whateeverthatnoreferthingwas
                  >
                    Doghouse
                  </a>
                  , and is the most recent addition to Mogul Development!
                </li>
              </ul>
            </p>
            <p>
              Thank you for not only taking the time to read this, but for supporting us via your
              continued use of TycoonMogul, Doghouse, and our other projects!
            </p>
          </section>
          <hr />
          <section>
            <h3 className="title" style={{ marginTop: "2%" }}>
              Contact Us
            </h3>
            <table class="table table-hover table-striped">
              <thead>
                <th scope="col">Title</th>
                <th scope="col">Username</th>
                <th scope="col">About / Position</th>
                <th scope="col">Email</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Business, Legal or Other</th>
                  <th scope="col">Ittim</th>
                  <th scope="col">CEO, CFO, COO</th>
                  <th scope="col">
                    <a href="mailto:ittim@moguldevs.xyz">ittim@moguldevs.xyz</a>
                  </th>
                </tr>
                <tr>
                  <th scope="row">Moderation Questions & Doghouse Support</th>
                  <th scope="col">XiuhcoatlSlayer</th>
                  <th scope="col">Moderation Team Lead, Doghouse Owner & Developer</th>
                  <th scope="col">
                    <a href="mailto:xiuh@moguldevs.xyz">xiuh@moguldevs.xyz</a>
                  </th>
                </tr>
                <tr>
                  <th scope="row">Development Questions</th>
                  <th scope="col">Puyodead1</th>
                  <th scope="col">Development Team Lead, CTO</th>
                  <th scope="col">
                    <a href="mailto:puyodead1@moguldevs.xyz">puyodead1@moguldevs.xyz</a>
                  </th>
                </tr>
                <tr>
                  <th scope="row">General Support</th>
                  <th scope="col"></th>
                  <th scope="col">General Questions and Support</th>
                  <th scope="col">
                    <a href="mailto:support@moguldevs.xyz">support@moguldevs.xyz</a>
                  </th>
                </tr>
                <tr>
                  <th scope="row">Appeals & Blacklists</th>
                  <th scope="col"></th>
                  <th scope="col">Ban / Blacklist Appeals and Questions</th>
                  <th scope="col">
                    <a href="mailto:appeals@moguldevs.xyz">appeals@moguldevs.xyz</a>
                  </th>
                </tr>
                <tr>
                  <th scope="row">Privacy</th>
                  <th scope="col"></th>
                  <th scope="col">Privacy Concerns and Questions</th>
                  <th scope="col">
                    <a href="mailto:privacy@moguldevs.xyz">privacy@moguldevs.xyz</a>
                  </th>
                </tr>
                <tr>
                  <th scope="row">Security</th>
                  <th scope="col"></th>
                  <th scope="col">Security Concerns and Questions</th>
                  <th scope="col">
                    <a href="mailto:security@moguldevs.xyz">security@moguldevs.xyz</a>
                  </th>
                </tr>
              </tbody>
            </table>
            <ul>
              <li>
                <i>
                  Appeals / Blacklist questions and appeals should be sent to appeals <u>NOT</u> the
                  Moderation team directly!
                </i>
              </li>
              <li>
                <i>
                  Normal bugs that do not comprimise sensitive data, user information, impact server
                  operations, or other severse issues should be submitted in the{" "}
                  <a href="https://discord.gg/Ef2AQns">Discord Server</a> <u>NOT</u> to security!
                </i>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}