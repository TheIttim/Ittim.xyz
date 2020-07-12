import React from "react";
import ShardItem from "./ShardItem";
import TimerMixin from "react-timer-mixin";
import fetch from "node-fetch";
import ClusterItem from "./ClusterItem";
import config from "../config";

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.formatData()
    .catch(() => this.resetState());
    TimerMixin.setInterval(async () => {
      await this.formatData()
      .catch(() => this.resetState());
    }, 60000);
  }

  resetState = () => {
    let cleanState = {};
    Object.keys(this.state).forEach((x) => (cleanState[x] = null));
    this.setState(cleanState);
  };

  async fetchData() {
    return new Promise(async (resolve, reject) => {
      return await fetch(config.bot_url)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  }

  async formatData() {
    const data = await this.fetchData();
    const shardItems = [];
    const clusterItems = [];

    for (var i = 0; i < data.clusters.length; i++) {
      const cluster = data.clusters[i];
      const clusterShards = data.shards.filter((x) => cluster.shards.indexOf(x) < 0);
      clusterItems.push(
        <ClusterItem
          key={cluster.id}
          id={cluster.id}
          guilds={cluster.guilds}
          users={cluster.users}
          uptime={cluster.uptime}
          shards={clusterShards}
          memoryUsage={cluster.memoryUsage}
        />
      );

      for (var j = 0; j < cluster.shards.length; j++) {
        const shard = data.shards[j];
        shardItems.push(
          <ShardItem
            key={shard.id}
            id={shard.id}
            latency={shard.latency}
            status={shard.status}
            guilds={shard.guilds}
          />
        );
      }
    }

    return this.setState({
      clusters: data.clusters,
      shards: data.shards,
      shardItems,
      memoryUsage: data.memoryUsage,
      clusterItems,
      guilds: data.guilds,
      users: data.users,
      estimatedTotalUsers: data.estimatedTotalUsers,
    });
  }

  render() {
    if (!this.state || !this.state.clusters)
      return (
        <div className="no-content">
          <span>(╯°□°)╯︵ ┻━┻</span>
          <br />
          Oops, it seems the bot may be offline or rebooting! <br /> This page will update when data
          becomes available.
        </div>
      );
    else
      return (
        <div className="content">
          <div className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <h3 className="header">Statistics Summary</h3>
                  <h6 className="subtitle">
                    Guilds: <span id="guild-data">{this.state.guilds}</span>
                  </h6>
                  <h6 className="subtitle">
                    Total Users:{" "}
                    <span id="user-data">{this.state.estimatedTotalUsers.toLocaleString()}</span>
                  </h6>

                  <h6 className="subtitle">
                    Memory Heap:{" "}
                    <span id="ram-data">
                      {(this.state.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </h6>
                  <h6 className="subtitle">
                    Memory RSS:{" "}
                    <span id="ram-data">
                      {(this.state.memoryUsage.rss / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </h6>
                  <h6 className="subtitle">
                    Shards: <span id="shard-data">{this.state.shards.length}</span>
                  </h6>
                  <h6 className="subtitle">
                    Clusters: <span id="cluster-data">{this.state.clusters.length}</span>
                  </h6>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h3 className="header">Shard Status</h3>
                  <h6 className="subtitle">
                    <i>This data auto updates</i>
                  </h6>
                  <div>
                    <h6 className="subtitle-key">
                      Key: <span className="key-item ready">Online</span>,{" "}
                      <span className="key-item connecting">Connecting</span>,{" "}
                      <span className="key-item disconnected">Disconnected/Errored</span>
                    </h6>
                  </div>
                  <div className="grid-container">{this.state.shardItems}</div>
                </div>
              </div>

              <div className="columns">
                <div className="column">
                  <h3 className="header">Cluster Status</h3>
                  <h6 className="subtitle">
                    <i>This data auto updates</i>
                  </h6>
                  <div className="grid-container">{this.state.clusterItems}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
