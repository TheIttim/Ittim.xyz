import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import config from "./config";

const Profile = (props) => {
  function usePromise(url) {
    const [value, setState] = useState(null);
    useEffect(() => {
      let isMounted = true;

      fetch(url)
        .then(async (res) => {
          if (isMounted) {
            const data = await res.json();
            setState(data);
          }
        })
        .catch((error) => console.error(error));

      return () => {
        isMounted = false;
      };
    }, []);
    return value;
  }

  // function formatDate(date) {
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? "pm" : "am";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   var strTime = hours + ":" + minutes + " " + ampm;
  //   return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  // }

  const id = props.match.params[0] || null;
  const data = usePromise(`${config.API_URL}${config.ENDPOINTS.USER}/${id}`);
  let content = (
    <div className="container text-center">
      <h1 className="title" style={{ marginTop: "2%" }}>
        Profile Viewer
      </h1>
      <div style={{ marginTop: "20vh" }}>
        <h3>Loading User Profile....</h3>
      </div>
    </div>
  );
  if (id) {
    if (data && !data.error) {
      content = (
        <div className="container text-center" style={{ marginTop: "2%" }}>
          <div className="jumbotron">
            <h1 className="title">Profile Viewer</h1>
            <div className="row">
              <div className="col-lg-5 col-sm-2"></div>
              <div className="col-lg-1 zoom">
                <img
                  className="rounded-circle"
                  alt={`${data.username}'s avatar`}
                  src={data.avatarURL}
                  width={64}
                  height={64}
                />
              </div>
              <div className="col-lg-3 col-sm-12">
                <span className="uas">
                  {data.username}#{data.discriminator}
                </span>
              </div>
              <div className="col-lg col-sm-2"></div>
            </div>
            <div className="row">
              <div className="col-lg col-sm-12">
                <ul>
                  <h3>User Information</h3>
                  <li className="uli">
                    <strong>Tycoon Name:</strong>{" "}
                    {data.tycoon ? data.tycoon.name : "None"}
                  </li>
                  <li className="uli">
                    <strong>Alliance Name:</strong>{" "}
                    {data.alliance ? data.alliance.name : "None"}
                  </li>
                </ul>
              </div>
              <div className="col-lg col-sm-12">
                <ul>
                  <h3>Position in Leaderboards</h3>
                  <li className="uli">
                    <strong>User Level:</strong> #8/100
                  </li>
                  <li className="uli">
                    <strong>Balance:</strong> #53/100
                  </li>
                  <li className="uli">
                    <strong>Tycoon Level</strong>: #92/100
                  </li>
                  <li className="uli">
                    <strong>Alliance Members:</strong> #13/20
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (data && data.error) {
      content = (
        <div className="container text-center">
          <h1 className="title" style={{ marginTop: "2%" }}>
            Profile Viewer
            <div style={{ marginTop: "20vh" }}>
              <h3>(╯°□°)╯︵ ┻━┻</h3>
              <h3>{data.error}</h3>
            </div>
          </h1>
        </div>
      );
    }
  } else {
    content = (
      <div className="container text-center">
        <h1 className="title" style={{ marginTop: "2%" }}>
          No User ID Provided
        </h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Helmet>
        <title>Mogul Development | Profile Viewer</title>
        <meta name="title" content="Mogul Development | Profile Viewer" />
        <meta
          name="description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://moguldevs.xyz/user/${id}`} />
        <meta
          property="og:title"
          content="Mogul Development | Profile Viewier"
        />
        <meta
          property="og:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
        <meta property="og:image" content="/Profile_Picture.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://moguldevs.xyz/user/${id}`}
        />
        <meta
          property="twitter:title"
          content="Mogul Development | Profile Viewer"
        />
        <meta
          property="twitter:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
        <meta property="twitter:image" content="/Profile_Picture.png" />
      </Helmet>
      {content}
    </div>
  );
};

export default Profile;
