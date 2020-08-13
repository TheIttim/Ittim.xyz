import React from "react";
import MetaTags from "react-meta-tags";

export default class MrMogul extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Ittim | Mr. Mogul</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/mrmogul" />
          <meta property="og:title" content="Ittim | Mr. Mogul" />
          <meta property="og:url" content="https://moguldevs.xyz/mrmogul" />
          <meta property="og:image" content="https://moguldevs.xyz/TM_icon.png" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Mr. Mogul
          </h3>

          <p>
            Mr. Mogul is the all-in-one utility bot for our Discord server, made to help new users
            understand who we are, and what we do, learn more about our projects, and incentivise
            them to stay active in our community! <br />
            <i>Side Note: It also allows us to punish the bad apples.</i>
          </p>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Command</th>
                <th scope="col">Alias(es)</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Help</th>
                <td>None</td>
                <td>General</td>
                <td>Shows help for commands or categories</td>
              </tr>
              <tr>
                <th scope="col">Info</th>
                <td>None</td>
                <td>General</td>
                <td>Information about the server</td>
              </tr>
              <tr>
                <th scope="col">ItCast</th>
                <td>None</td>
                <td>General</td>
                <td>Information about ItCast</td>
              </tr>
              <tr>
                <th scope="col">MrMogul</th>
                <td>None</td>
                <td>General</td>
                <td>Information about Mr. Mogul</td>
              </tr>
              <tr>
                <th scope="col">Ping</th>
                <td>None</td>
                <td>General</td>
                <td>Gets the bots ping</td>
              </tr>
              <tr>
                <th scope="col">Support</th>
                <td>None</td>
                <td>General</td>
                <td>Information on getting support</td>
              </tr>
              <tr>
                <th scope="col">TycoonMogul</th>
                <td>None</td>
                <td>General</td>
                <td>Information about TycoonMogul</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
