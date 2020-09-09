import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  roll() {
    const s = document.createElement("style");
    s.innerHTML = `
    @-webkit-keyframes roll {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    
    @-moz-keyframes roll {
      from {
        -moz-transform: rotate(0deg);
      }
      to {
        -moz-transform: rotate(360deg);
      }
    }
    
    @keyframes roll {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    body {
      animation-name: roll;
      animation-duration: 4s;
      animation-iteration-count: 1;
      -moz-animation-name: roll;
      -moz-animation-duration: 4s;
      -moz-animation-iteration-count: 1;
      -webkit-animation-name: roll;
      -webkit-animation-duration: 4s;
      -webkit-animation-iteration-count: 1;
    }
    `;
    document.getElementsByTagName("head")[0].appendChild(s);

    setTimeout(() => {
      s.parentElement.removeChild(s);
    }, 4000);
  }

  render() {
    return (
      <div id="footer" class="mt-auto">
        <footer className="text-center bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md col-sm-12">
                <p className="text">
                  Invite{" "}
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=519954424270028811&scope=bot&permissions=380096"
                    target="blank_"
                    rel="noopener noreferrer"
                  >
                    TycoonMogul
                  </a>
                  !
                </p>
              </div>
              <div className="col-md col-sm-12">
                <p className="text">
                  Donate via{" "}
                  <a
                    href="https://paypal.me/EthanHagan?locale.x=en_US"
                    target="blank_"
                    rel="noopener noreferrer"
                  >
                    PayPal
                  </a>{" "}
                  or become a patron at{" "}
                  <a href="https://www.patreon.com/Ittim?fan_landing=true" target="blank_">
                    Patreon
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-sm-12">
                <p>
                  <i className="text-muted copy">Copyright &copy; 2020 Mogul Development LLC</i>
                </p>
              </div>
              <div className="col-md col-sm-12">
                <p className="text">
                  Meet the team on{" "}
                  <a href="https://discord.gg/Ef2AQns" target="blank_" rel="noopener noreferrer">
                    Discord
                  </a>
                  !
                </p>
              </div>
              <div className="col-md col-sm-12">
                <p className="text">
                  Visit our{" "}
                  <a href="https://twitter.com/MogulDevs" target="blank_" rel="noopener noreferrer">
                    Twitter
                  </a>
                </p>
              </div>
              <button
                onClick={this.roll}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "0",
                }}
              ></button>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
