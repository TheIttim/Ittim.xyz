import React from "react";
import ShardItem from "./ShardItem";
import TimerMixin from "react-timer-mixin";
import fetch from "node-fetch";
import ClusterItem from "./ClusterItem";
import config from "../config";
import MetaTags from "react-meta-tags";

export default class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.formatData().catch((error) => this.setState({ error }));
    TimerMixin.setInterval(async () => {
      await this.formatData().catch((error) => this.setState({ error }));
    }, 60000);
  }

  resetState = () => {
    let cleanState = {};
    Object.keys(this.state).forEach((x) => (cleanState[x] = null));
    this.setState(cleanState);
  };

  async fetchData() {
    return new Promise(async (resolve, reject) => {
      return await fetch(`${config.apiURL}${config.endpoints.stats}`)
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

      for (var j = 0; j < data.shards.length; j++) {
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
    let content = (
      <div className="no-content">
        <h3>Loading Status...</h3>
      </div>
    );
    if (this.state && this.state.clusters) {
      content = (
        <div className="container status-container" style={{ marginTop: "2%" }}>
          <h6 className="text-center">This data updates automatically every few seconds</h6>
          <div className="row">
            <div className="col-12">
              <h3 className="header">Statistics Summary</h3>
            </div>
            <div className="col-12">
              <h6 className="subtitle">
                Guilds: <span id="guild-data">{this.state.guilds}</span>
              </h6>
            </div>
            <div className="col-12">
              <h6 className="subtitle">
                Total Users: {this.state.estimatedTotalUsers.toLocaleString()}
              </h6>
            </div>

            <div className="col-12">
              <h6 className="subtitle">
                Memory Heap: {(this.state.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB
              </h6>
            </div>

            <div className="col-12">
              <h6 className="subtitle">
                Memory RSS: {(this.state.memoryUsage.rss / 1024 / 1024).toFixed(2)} MB
              </h6>
            </div>

            <div className="col-12">
              <h6 className="subtitle">Shards: {this.state.shards.length}</h6>
            </div>

            <div className="col-12">
              <h6 className="subtitle">Clusters: {this.state.clusters.length}</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h3>Shard Status</h3>
            </div>
            <div className="col-12">
              <h6 className="subtitle-key">
                Key: <span className="key-item ready">Online</span>,{" "}
                <span className="key-item connecting">Connecting</span>,{" "}
                <span className="key-item disconnected">Disconnected/Errored</span>
              </h6>
            </div>
            <div className="status-grid">{this.state.shardItems}</div>
          </div>

          <div className="row">
            <div className="col-12">
              <h3>Cluster Status</h3>
            </div>
            <div className="status-grid">{this.state.clusterItems}</div>
          </div>
        </div>
      );
    } else if (this.state && this.state.error) {
      content = (
        <div className="no-content">
          <span>(╯°□°)╯︵ ┻━┻</span>
          <br />
          Oops, it seems the bot may be offline or rebooting! <br /> This page will update when data
          becomes available.
        </div>
      );
    }

    return (
      <div className="app">
        <MetaTags>
          <title>Ittim | Status</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/status" />
          <meta property="og:title" content="Ittim | Status" />
          <meta property="og:url" content="https://moguldevs.xyz/status" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Mogul Development's projects, like TycoonMogul, Doghouse, & Minebot!"
          />
        </MetaTags>
        {content}
      </div>
    );
  }
}
