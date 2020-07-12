import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default class ShardItem extends React.Component {
  render() {
    const JSX = () => {
      return (
        <div className="grid-item" id={`shard-${this.props.id}`}>
          <p className={this.props.status}>{this.props.id}</p>
        </div>
      );
    };

    const tippy = () => {
      if (this.props.status === "ready") {
        return (
          <Tippy
            content={
              <>
                Status: {this.props.status}
                <br />
                Ping: {this.props.latency} ms
              </>
            }
            allowHTML="true"
            animation="shift-away"
          >
            {JSX()}
          </Tippy>
        );
      } else {
        return (
          <Tippy content={<>Status: {this.props.status}</>} allowHTML="true" animation="shift-away">
            {JSX()}
          </Tippy>
        );
      }
    };

    return tippy();
  }
}
