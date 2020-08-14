import React from "react";
import MetaTags from "react-meta-tags";

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Ittim | Privacy Policy</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/privacypolicy" />
          <meta property="og:title" content="Ittim | Privacy Policy" />
          <meta property="og:url" content="https://moguldevs.xyz/privacypolicy" />
          <meta property="og:image" content="https://moguldevs.xyz/Profile_Picture.png" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Privacy Policy
          </h3>
          <hr />
          <section>
            <p className="privacyp">
              We will never ask you to provide personal information unless it is required to provide
              services to you. All personal information is collected by fair and lawful means, with
              your full knowledge and consent. We will also let you know why we’re collecting it and
              how it will be used.
            </p>
            <h4 style={{ fontSize: "16px", margin: "0 0 1.4rem 0" }}>
              Mogul Development does not share or sell your personal information for advertising or
              marketing purposes. Additionally, we don’t share your personally identifying
              information with any third-parties, except when it is required by law.
            </h4>
            <p className="privacyp">
              We only retain collected information for as long as necessary to provide you with your
              requested service. What data we do collect, we’ll protect using commercially
              reasonable means to prevent loss and theft, as well as unauthorized access,
              disclosure, copying, use or modification. The data we store includes but is not
              limited to: User IDs, Usernames, and Profile Pictures
            </p>
            <p className="privacyp">
              Our site may link to external sites that are not operated by us. Please be aware that
              we have no control over the content and practices of these sites, and cannot accept
              responsibility or liability for their respective privacy policies.
            </p>
            <p className="privacyp">
              If you have any questions or concerns regarding our privacy policies, please send us a
              detailed message to <a href="mailto:privacy@moguldevs.xyz">privacy@moguldevs.xyz</a>.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
