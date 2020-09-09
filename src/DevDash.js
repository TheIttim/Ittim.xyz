import React from "react";
import MetaTags from "react-meta-tags";
import { Chart } from "primereact/chart";

export default class DevDash extends React.Component {
  constructor(props) {
    super(props);

    this.dates = this.getDates();

    this.basicData = {
      labels: this.dates
        .map((x) => x.toDateString().substring(0, x.toDateString().length - 4))
        .reverse(),
      datasets: [
        {
          label: "Commands Run",
          data: [3, 7, 10, 4, 18, 11, 1],
          fill: false,
          borderColor: "#42A5F5",
        },
      ],
    };

    this.options = this.getLightTheme();
  }

  getDates() {
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

  getLightTheme() {
    let basicOptions = {
      legend: {
        labels: {
          fontColor: "#ffffff",
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "#ffffff",
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: "#ffffff",
            },
          },
        ],
      },
    };

    return {
      basicOptions,
    };
  }

  render() {
    const { basicOptions } = this.options;
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
              <h5>Daily Commands Ran</h5>
              <Chart type="line" data={this.basicData} options={basicOptions} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
