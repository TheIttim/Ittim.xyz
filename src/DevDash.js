import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Chart } from "primereact/chart";
import GuildActivity from "./DevDashComponenents/GuildActivity";
import config from "./config";
import { Messages } from "primereact/messages";
import { Message } from "primereact/message";

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
    tooltips: {
      mode: "index",
      intersect: false,
    },
    responsive: true,
    legend: {
      labels: {
        fontColor: "#FFFFFF",
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
          ticks: {
            fontColor: "#FFFFFF",
          },
          gridLines: {
            color: "#ebedef",
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
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
        .catch((err) => {
          console.error(err);
        });

      return () => {
        isMounted = false;
      };
    }, []);
    return value;
  }

  const data = usePromise();
  const { basicOptions } = getLightTheme();

  let content = (
    <div className="text-center">
      <h1>Loading...</h1>
    </div>
  );

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
      <Helmet>
        <title>Mogul Development | Developer Dashboard</title>
        <meta name="title" content="Mogul Development | Developer Dashboard" />
        <meta
          name="description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moguldevs.xyz/devdash" />
        <meta
          property="og:title"
          content="Mogul Development | Developer Dashboard"
        />
        <meta
          property="og:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
        <meta property="og:image" content="/Profile_Picture.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://moguldevs.xyz/devdash" />
        <meta
          property="twitter:title"
          content="Mogul Development | Developer Dashboard"
        />
        <meta
          property="twitter:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
        <meta property="twitter:image" content="/Profile_Picture.png" />
      </Helmet>
      <div className="container text-center mt-4">
        <div>
          <div className="card">
            <h5>Command Frequency</h5>
            <Chart
              type="horizontalBar"
              data={commandFrequencyData}
              options={basicOptions}
            />
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
