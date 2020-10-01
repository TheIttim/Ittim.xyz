import React from "react";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";

export default class DataDeletionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  render() {
    return (
      <div className="p-mt-2">
        <Panel className="p-mt-5" style={{ paddingLeft: "15%", paddingRight: "15%" }}>
          <div className="p-text-center">
            <h2>Data Deletion Request</h2>
            <h6>
              Please fill out the form below and one of our staff members will get in contact with
              you.
            </h6>
          </div>
          <hr />
          <div className="input-wrapper">
            <div className="p-field">
              <InputText
                id="username"
                placeholder="Discord Username"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>

            <div className="p-field">
              <InputText
                id="id"
                aria-describedby="id-help"
                className="p-d-block"
                placeholder="Discord User ID"
                onChange={(e) => this.setState({ id: e.target.value })}
              />
              <small id="id-help" className="p-d-block">
                For instructions on obtaining this: <a href="#">asdasd</a>
              </small>
            </div>

            <div className="p-field">
              <InputTextarea
                rows={5}
                cols={30}
                placeholder="Briefly explain why you are requesting your data to be deleted, this is optional."
                onChange={(e) => this.setState({ description: e.target.value })}
                autoResize
                maxLength={300}
              />
            </div>
          </div>
        </Panel>
      </div>
    );
  }
}
