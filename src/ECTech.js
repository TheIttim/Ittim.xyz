import React from "react";
import { Helmet } from "react-helmet";

export default class ECTech extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Ittim | EC Tech</title>
          <link rel="canonical" href="https://www.ittim.xyz/#/ectech" />
          <meta property="og:title" content="Ittim | EC Tech" />
          <meta property="og:url" content="https://ittim.xyz/#/ectech" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
        </Helmet>
        <center>
          <main>
            <h1 className="title" style={{ marginTop: "2%" }}>
              EC Tech Solutions LLC
            </h1>
            <p>
              Among other projects, I founded a company with a friend, but now it's only me, and
              well, I am still at a profit of $0. Regardless, this page shall be the go to for
              anybody wanting the company's services.
            </p>
            <br />
            <h2 className="subtitle">
              <b>Who We Are:</b>
            </h2>
            <p>EC Tech is a small startup company with no current brick & mortar location.</p>
            <br />
            <h2 className="subtitle">
              <b>What We Do:</b>
            </h2>
            <p>
              EC Tech is dedicated to providing websites and other software based products to our
              clients, as well as maintenance for said products.
            </p>
          </main>
        </center>
      </div>
    );
  }
}
