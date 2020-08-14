import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
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
  const data = usePromise(`${config.apiURL}${config.endpoints.user}/${id}`);
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
      // const members = [];
      // for (const obj of data.members) {
      //   let rank;
      //   switch (obj.rank) {
      //     case 3:
      //       rank = "Leader";
      //       break;
      //     case 2:
      //       rank = "Officer";
      //       break;
      //     case 1:
      //       rank = "Deputy";
      //       break;
      //     case 0:
      //       rank = "Member";
      //       break;
      //   }
      //   members.push(
      //     <tr>
      //       <th>{rank}</th>
      //       <td>
      //         <div className="row">
      //           <div className="col-3"></div>
      //           <div className="col-lg col-sm-12">
      //             <img
      //               className="rounded-circle zoom"
      //               alt={`${obj.username}'s avatar`}
      //               src={obj.avatarURL}
      //               width={64}
      //               height={64}
      //             />
      //           </div>
      //           <div className="col-lg col-sm-12">
      //             {obj.username}#{obj.discriminator}
      //           </div>
      //           <div className="col-3"></div>
      //         </div>
      //       </td>
      //       {/* <td>{formatDate(new Date(obj.joinedAt))}</td> */}
      //     </tr>
      //   );
      // }
      content = (
        <div className="container text-center">
          <h1 className="title" style={{ marginTop: "2%" }}>
            Profile Viewer
            <div className="jumbotron">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <h4>
                    <b>Username</b>
                  </h4>
                  <h4>
                    {data.username}#{data.discriminator}
                  </h4>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <h4>
                    <b>User Level</b>
                  </h4>
                  <h4>000000</h4>
                </div>
              </div>
            </div>
          </h1>
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
      <MetaTags>
        <title>Mogul Development | Profile Viewer</title>
        <link rel="canonical" href={`https://www.moguldevs.xyz/user/${id}`} />
        <meta property="og:title" content="Mogul Development | Profile Viewer" />
        <meta property="og:url" content={`https://moguldevs.xyz/user/${id}`} />
        <meta property="og:image" content="https://moguldevs.xyz/TM_icon.png" />
        <meta
          property="og:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
      </MetaTags>
      {content}
    </div>
  );
};

export default Profile;
