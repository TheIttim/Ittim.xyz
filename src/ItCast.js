import React from "react";
import { Helmet } from "react-helmet";

export default class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Ittim | ItCast</title>
          <link rel="canonical" href="https://www.ittim.xyz/itcast" />
          <meta property="og:title" content="Ittim | ItCast" />
          <meta property="og:url" content="https://ittim.xyz/itcast" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
        </Helmet>
        <div class="container text-center">
          <h3 style={{ marginTop: "2%" }}>ItCast</h3>
          <h4>Hosted By: Ittim</h4>
          <p>
            ItCast, or Ittim Podcast, is my way of releasing my thoughts to the world. There is a
            new episode every week, and will allow me to cover a broad amount of topics.
          </p>
          <p>
            This page contains SoundCloud players of every released episode of ItCast. Their YouTube
            Counterparts can be found{" "}
            <a href="https://www.youtube.com/playlist?list=PLnF5U0ju8-SzlaezA0mhwUO17KW9zC6D2">
              here
            </a>
            !
          </p>
          <br />
          <h4>Episode 1: Introductions</h4>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            title="soundcloud"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/817148626&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>
    );
  }
}
