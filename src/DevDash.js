import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Chart } from "primereact/chart";
import GuildActivity from "./DevDashComponenents/GuildActivity";
import config from "./config";

function getDates() {
  const BUFFER = 7; // amount of days to show, default is 6 (one week)
  const today = new Date();
  const dates = [];
  for (var i = 0; i < BUFFER; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(date);
  }

  return dates;
}

function getLightTheme() {
  let basicOptions = {
    legend: {
      labels: {
        fontColor: "#FFFFFF",
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: "#FFFFFF",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: "#FFFFFF",
          },
        },
      ],
    },
  };

  return {
    basicOptions,
  };
}
const DevDash = () => {
  function usePromise() {
    const [value, setState] = useState(null);
    useEffect(() => {
      let isMounted = true;
      const token = window.localStorage.getItem("token");

      fetch(`${config.API_URL}/metrics`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          if (isMounted) {
            const d = await res.json();

            setState(d);
          }
        })
        .catch((error) => console.error(error));

      return () => {
        isMounted = false;
      };
    }, []);
    return value;
  }

  const data = usePromise();
  const { basicOptions } = getLightTheme();

  let content = <h1>Loading...</h1>;

  if (!data) {
    return content;
  }

  // const dates = getDates();

  const commandFrequencyData = {
    // labels: dates
    //   .map((x) => x.toDateString().substring(0, x.toDateString().length - 4))
    //   .reverse(),
    labels: Object.keys(data.commands),
    datasets: [
      {
        label: "Times Run",
        data: Object.values(data.commands),
        backgroundColor: "#42A5F5",
      },
    ],
  };

  return (
    <div className="app">
      <MetaTags>
        <title>Mogul Development | Developer Dashboard</title>
        <link rel="canonical" href="https://www.moguldevs.xyz/devdash" />
        <meta property="og:title" content="Mogul Development | Developer Dashboard" />
        <meta property="og:url" content="https://moguldevs.xyz/devdash" />
        <meta property="og:image" content="https://moguldevs.xyz/Profile_Picture.png" />
        <meta
          property="og:description"
          content="Welcome to moguldevs.xyz, The website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
      </MetaTags>
      <div className="container text-center mt-4">
        <div>
          <div className="card">
            <h5>Command Frequency</h5>
            <Chart type="bar" data={commandFrequencyData} options={basicOptions} />
          </div>
        </div>

        <br />
        <br />

        <GuildActivity />
      </div>
    </div>
  );
};

export default DevDash;
