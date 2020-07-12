import React from "react";
import { Helmet } from "react-helmet";

export default class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Ittim | ItCast</title>
          <link rel="canonical" href="https://www.ittim.xyz/#/itcast" />
          <meta property="og:title" content="Ittim | ItCast" />
          <meta property="og:url" content="https://ittim.xyz/#/itcast" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
        </Helmet>
        <center>
          <main>
            <h1 className="title" style={{ marginTop: "2%" }}>
              ItCast
            </h1>
            <h2 className="subtitle">Hosted By: Ittim</h2>
            <p>
              ItCast is my newest Podcast. Its title is simply my name, Ittim, combined with the
              word podcast. I'm very creative as you can tell. I chose this name, as it is very
              simple and doesn't force me to stick to a certain topic. Instead I can come up with an
              idea, record & title it and be on my merry way. I also feel like this will help keep
              the podcast more interesting, as viewers will have something new to listen to each
              week and the only recurring theme will be my voice.
            </p>
            <p>
              This page contains SoundCloud players of every released episode of ItCast. Their
              YouTube Counterparts can be found{" "}
              <a href="https://www.youtube.com/playlist?list=PLnF5U0ju8-SzlaezA0mhwUO17KW9zC6D2">
                here{" "}
              </a>
              as they take up too much space on a page.
            </p>
            <br />
            <p className="subtitle is-4 center">Episode 1: Introductions</p>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              title="soundcloud"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/817148626&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </main>
        </center>
      </div>
    );
  }
}
