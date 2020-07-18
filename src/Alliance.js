import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
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
    return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }

  const id = props.match.params[0] || null;
  const data = usePromise(`${config.apiURL}${config.endpoints.alliance}/${id}`);
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
        members.push(
          <tr>
            <th>{obj.rank}</th>
            <td>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-lg col-sm-12">
                  <img
                    className="rounded-circle zoom"
                    alt={`${obj.username}'s avatar`}
                    src={obj.avatar}
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
          </h1>
        </div>
      );
    } else if (data && data.error) {
      content = (
        <div className="container text-center">
          <h1 className="title" style={{ marginTop: "2%" }}>
            Alliance Viewer
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
          No Alliance ID Provided
        </h1>
      </div>
    );
  }

  return (
    <div className="app">
      <MetaTags>
        <title>Ittim | Alliance Viewer</title>
        <link rel="canonical" href={`https://www.ittim.xyz/alliances/${id}`} />
        <meta property="og:title" content="Ittim | Alliance Viewer" />
        <meta property="og:url" content={`https://ittim.xyz/alliances/${id}`} />
        <meta property="og:image" content="https://ittim.xyz/TM_icon.png" />
        <meta
          property="og:description"
          content="Welcome to Ittim.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
      </MetaTags>
      {content}
    </div>
  );
};

export default Alliance;
