import React from "react";
import MetaTags from "react-meta-tags";

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Ittim | Privacy Policy</title>
          <link rel="canonical" href="https://www.ittim.xyz/privacypolicy" />
          <meta property="og:title" content="Ittim | Privacy Policy" />
          <meta property="og:url" content="https://ittim.xyz/privacypolicy" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
          <meta
            property="og:description"
            content="Welcome to Ittim.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Privacy Policy
          </h3>
          <p>
          We only retain collected information(user IDs) for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. 
          We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
<br></br><br></br>
Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
<br></br><br></br>
Your continued use of our website, bot, and any other products will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
<br></br><br></br>
<b>This policy is effective as of 30 July 2020.</b>
          </p>
        </div>
      </div>
    );
  }
}
