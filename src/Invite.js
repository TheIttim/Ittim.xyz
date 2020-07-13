import React from "react";
import { Helmet } from "react-helmet";

export default class Invite extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Ittim | Invite</title>
          <link rel="canonical" href="https://www.ittim.xyz/invite" />
          <meta property="og:title" content="Ittim | Invite" />
          <meta property="og:url" content="https://ittim.xyz/invite" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
          <meta
            http-equiv="Refresh"
            content="0;https://discord.com/oauth2/authorize?client_id=519954424270028811&scope=bot&permissions=380096"
          ></meta>
        </Helmet>
      </div>
    );
  }
}
