import React from "react";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Ripple } from "primereact/ripple";
import PrimeReact from "primereact/components/utils/PrimeReact";
import $ from "jquery";
import "jquery-validation";

export default class DataDeletionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", processing: false };
    PrimeReact.ripple = true;
  }

  componentWillMount() {
    this.setState({
      processing: false,
    });
  }

  componentDidMount() {
    this.validator = $(this.form).validate({
      submitHandler: () => {
        this.setState({ processing: true });
        Promise.resolve()
          .then(() => {
            // TODO: post to api
          })
          .then(() => this.setState({ processing: false }))
          .catch((error) => {
            this.setState({ processing: false });
            throw error;
          });
      },
      errorElement: "div",
      errorClass: "error",
      highlight: (element) => {
        // add data so that React component can keep the extra class intact
        $(element).addClass("p-invalid").data("has-error", true);
      },

      unhighlight: (element) => {
        $(element).removeClass("p-invalid").data("has-error", false);
      },
    });
    if (this.props.validateOnMount) {
      this.setIsValid();
    }
  }

  componentDidUpdate() {
    if (this.props.validateOnMount) {
      this.setIsValid();
    }
  }

  setIsValid() {
    const { onChange } = this.props;
    const isValid = $(this.form).valid();
    if (onChange && isValid !== this.isValid) {
      this.isValid = isValid;
      onChange(isValid);
    }
  }

  resetForm() {
    this.validator.resetForm();
  }

  render() {
    const { className } = this.props;
    return (
      <div className="p-mt-2">
        <Panel className="p-mt-5" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
          <div className="p-text-center">
            <h2>Data Deletion Request</h2>
            <h6>
              Please fill out the form below and one of our staff members will get in contact with
              you.
            </h6>
          </div>
          <hr />
          <form
            ref={(el) => {
              this.form = el;
            }}
            className={className}
          >
            <div className="input-wrapper">
              <div className="p-field">
                <InputText
                  id="username"
                  name="username"
                  placeholder="Discord Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  required
                  disabled={this.state.processing ? true : null}
                />
              </div>

              <div className="p-field">
                <InputText
                  id="id"
                  name="id"
                  placeholder="Discord User ID"
                  onChange={(e) => this.setState({ id: e.target.value })}
                  required
                  disabled={this.state.processing ? true : null}
                />
                <small id="username1-help" className="p-d-block">
                  For help obtaining this, see{" "}
                  <a href="https://support.discord.com/hc/en-us/articles/206346498">this article</a>
                </small>
              </div>

              <div className="p-field">
                <InputTextarea
                  rows={5}
                  cols={30}
                  placeholder="Briefly explain why you are requesting your data to be deleted, this is optional."
                  onChange={(e) => this.setState({ description: e.target.value })}
                  autoResize
                  name="description"
                  maxLength={300}
                  disabled={this.state.processing ? true : null}
                />
              </div>
            </div>
            <Button
              label="Submit"
              icon="pi pi-check"
              className="p-ripple"
              disabled={this.state.processing ? true : null}
            >
              <Ripple />
            </Button>
          </form>
        </Panel>
      </div>
    );
  }
}
