import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import config from "./config";

const Alliance = (props) => {
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

  function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      "  " +
      strTime
    );
  }

  const id = props.match.params[0] || null;
  const data = usePromise(
    `${config.API_URL}${config.ENDPOINTS.ALLIANCE}/${id}`
  );
  let content = (
    <div className="container text-center">
      <h1 className="title" style={{ marginTop: "2%" }}>
        Alliance Viewer
      </h1>
      <div style={{ marginTop: "20vh" }}>
        <h3>Loading Alliance Information....</h3>
      </div>
    </div>
  );
  if (id) {
    if (data && !data.error) {
      const members = [];
      for (const obj of data.members) {
        let rank;
        switch (obj.rank) {
          case 3:
            rank = "Leader";
            break;
          case 2:
            rank = "Officer";
            break;
          case 1:
            rank = "Deputy";
            break;
          case 0:
            rank = "Member";
            break;
          default:
            rank = "Member";
            break;
        }
        members.push(
          <tr>
            <th>{rank}</th>
            <td>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-lg col-sm-12">
                  <img
                    className="rounded-circle zoom"
                    alt={`${obj.username}'s avatar`}
                    src={obj.avatarURL}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="col-lg col-sm-12">
                  {obj.username}#{obj.discriminator}
                </div>
                <div className="col-3"></div>
              </div>
            </td>
            <td>{formatDate(new Date(obj.joinedAt))}</td>
          </tr>
        );
      }
      content = (
        <div className="container text-center">
          <h1 className="title" style={{ marginTop: "2%" }}>
            Alliance Viewer
          </h1>
          <div className="jumbotron">
            <div className="row">
              <div className="col-lg col-sm-12">
                <h4>
                  <b>Alliance Name:</b>
                </h4>
                <h4>{data.name}</h4>
              </div>
              <div className="col-lg col-sm-12">
                <h4>
                  <b>Alliance Description:</b>
                </h4>
                <h4>{data.description ? data.description : "Not Set"}</h4>
              </div>
              <div className="col-lg col-sm-12">
                <h4>
                  <b>Leader:</b>
                </h4>
                <h4>
                  {data.leader.username}#{data.leader.discriminator}
                </h4>
              </div>
              <div className="col-lg col-sm-12">
                <h4>
                  <b>Created:</b>
                </h4>
                <h4>{formatDate(new Date(data.createdAt))}</h4>
              </div>
            </div>
            <hr />
            <h2>
              <b>Alliance Members</b>
            </h2>
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Username</th>
                  <th scope="col">Joined On</th>
                </tr>
              </thead>
              <tbody>{members}</tbody>
            </table>
          </div>
        </div>
      );
    } else if (data && data.error) {
      content = (
        <div className="container text-center">
          <h1 className="title" style={{ marginTop: "2%" }}>
            Alliance Viewer
          </h1>
          <div style={{ marginTop: "20vh" }}>
            <h3>(╯°□°)╯︵ ┻━┻</h3>
            <h3>{data.error}</h3>
          </div>
        </div>
      );
    }
  } else {
    content = (
      <div className="container text-center">
        <h1 className="title" style={{ marginTop: "2%" }}>
          No Alliance ID Provided
        </h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Helmet>
        <title>Mogul Development | Alliance Viewer</title>
        <meta name="title" content="Mogul Development | Alliance Viewer" />
        <meta
          name="description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://moguldevs.xyz/alliances/${id}`}
        />
        <meta
          property="og:title"
          content="Mogul Development | Alliance Viewer"
        />
        <meta
          property="og:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
        <meta property="og:image" content="/TM_icon.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://moguldevs.xyz/alliances/${id}`}
        />
        <meta
          property="twitter:title"
          content="Mogul Development | Alliance Viewer"
        />
        <meta
          property="twitter:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
        <meta property="twitter:image" content="/TM_icon.png" />
      </Helmet>
      {content}
    </div>
  );
};

export default Alliance;
