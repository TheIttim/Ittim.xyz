import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column is-size-7">
            <p>
              Invite{" "}
              <a href="https://Ittim.xyz/invite.html" target="_blank">
                TycoonMogul
              </a>{" "}
              to <i>your</i> Discord server
            </p>
          </div>
          <div className="column is-size-7">
            <p>
              Donate via{" "}
              <a href="https://paypal.me/EthanHagan?locale.x=en_US" target="blank_">
                PayPal
              </a>{" "}
              or{" "}
              <a href="https://www.patreon.com/Ittim?fan_landing=true" target="blank_">
                Patreon
              </a>
            </p>
          </div>
          <div className="column is-size-7">
            <p>
              Meet the Team on{" "}
              <a href="https://discord.gg/Ef2AQns" target="blank_">
                Discord
              </a>
            </p>
          </div>
        </div>
        <span className="is-size-7">
          <i>Copyright &copy; 2020 Puyodead1 & TycoonMogul</i>
        </span>
      </div>
    </footer>
  );
}
