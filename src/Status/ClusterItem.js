import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Duration } from "@klasa/duration";

export default class ClusterItem extends React.Component {
  render() {
    const JSX = () => {
      return (
        <div className="grid-item" id={`cluster-${this.props.id}`}>
          <p className="ready">{this.props.id}</p>
        </div>
      );
    };

    const formatTime = (time) => {
      return Duration.toNow(new Date().getTime() - time);
    };

    const tippy = () => {
      return (
        <Tippy
          content={
            <>
              Shards: {this.props.shards.length.toLocaleString()}
              <br />
              Guilds: {this.props.guilds}
              <br />
              Cached Users: {this.props.users.toLocaleString()}
              <br />
              Uptime: {formatTime(this.props.uptime)}
              <br />
              Memory Heap: {(this.props.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB
              <br />
              Memory RSS: {(this.props.memoryUsage.rss / 1024 / 1024).toFixed(2)} MB
            </>
          }
          allowHTML="true"
          animation="shift-away"
        >
          {JSX()}
        </Tippy>
      );
    };

    return tippy();
  }
}
