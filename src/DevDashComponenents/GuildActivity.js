import React from "react";
import { Chart } from "primereact/chart";
import config from "../config";

export default class GuildActivity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

    this.options = {
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
  }

  componentDidMount() {
    //set guilds
    const token = window.localStorage.getItem("token");
    fetch(`${config.API_URL}/metrics`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        const d = await res.json();
        const metrics = d.metrics;
        const reduced = metrics.reduce((r, a) => {
          r[a.guild_id] = [...(r[a.guild_id] || []), a];
          return r;
        }, {});

        console.log(Object.keys(reduced));

        const chatData = {
          labels: Object.keys(reduced),
          datasets: [
            {
              label: "Commands Ran",
              data: Object.values(reduced).map((x) => x.length),
              backgroundColor: "#42A5F5",
            },
          ],
        };

        this.setState({ data: chatData });
      })
      .catch((error) => console.error(error));
  }

  render() {
    let content = <h1>Loading...</h1>;
    if (this.state.data) {
      content = (
        <div>
          <div className="card">
            <h5>Guild Activity</h5>
            <Chart type="bar" data={this.state.data} options={this.options} />
          </div>
        </div>
      );
    }
    return content;
  }
}
