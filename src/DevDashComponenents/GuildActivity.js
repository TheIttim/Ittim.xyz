import React from "react";
import { Chart } from "primereact/chart";
import config from "../config";

import { Messages } from "primereact/messages";
import { Message } from "primereact/message";

export default class GuildActivity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

    this.options = {
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
        if (res.status !== 200) {
          // failure
          throw new Error(`${res.status} - ${res.statusText}`);
        }
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
      .catch((err) => {
        this.setState({ error: true });
        console.error(err);
        this.messages.show({
          severity: "error",
          detail: err.message,
          closable: false,
          sticky: true,
        });
      });
  }

  render() {
    let content = <h1>Loading...</h1>;
    if (this.state.data) {
      content = (
        <div>
          <div className="card">
            <h5>Guild Activity</h5>
            <Chart
              type="horizontalBar"
              data={this.state.data}
              options={this.options}
            />
          </div>
        </div>
      );
    } else if (this.state.error) {
      //
      content = (
        <div>
          <Messages ref={(el) => (this.messages = el)}></Messages>
        </div>
      );
    }
    return content;
  }
}
