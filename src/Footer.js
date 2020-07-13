import React from "react";

export default function Footer() {
  return (
    <footer className="text-center bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Invite{" "}
              <a href="https://Ittim.xyz/invite.html" target="_blank" rel="noopener noreferrer">
                TycoonMogul
              </a>
              !
            </p>
          </div>
          <div className="col">
            <p>
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
          <div className="col">
            <p>
              Meet the team on{" "}
              <a href="https://discord.gg/Ef2AQns" target="blank_" rel="noopener noreferrer">
                Discord
              </a>
              !
            </p>
          </div>
        </div>
        <div className="row pb-2">
          <div className="col">
            <span className="text-muted">
              <i>Copyright &copy; 2020 Puyodead1 & Ittim</i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
