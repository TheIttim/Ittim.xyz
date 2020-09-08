import React, { useEffect, useState } from "react";
import config from "./config";
const { OAUTH, API_URL } = config;

const LoginCallback = ({ location }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const code = (location.search.match(/code=([^&]+)/) || [])[1];
    // const state = (location.search.match(/state=([^&]+)/) || [])[1];
    const qParams = [
      `code=${code}`,
      `redirect_uri=${OAUTH.REDIRECT_URI}`,
      `scope=${OAUTH.SCOPE}`,
    ].join("&");
    fetch(`${API_URL}/api/oauth/code?${qParams}`)
      .then((res) => res.json())
      .then(async (res) => {
        if (res.error) {
          // error
          setError(JSON.parse(res.error));
        } else if (res.access_token) {
          window.localStorage.setItem("token", res.access_token);
          await fetch("https://discord.com/api/users/@me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${res.access_token}`,
            },
          })
            .then((res) => res.json())
            .then((res) => {
              window.localStorage.setItem("user", JSON.stringify(res));
            })
            .catch((e) => setError({ error: e }));
          setLoggedIn(true);
        }
      })
      .catch((e) => setError({ error: e.message, error_description: "Error occured!" }));
  }, []);

  let content = <h3>Loading....</h3>;
  if (isLoggedIn && !error) {
    content = (
      <section>
        <h1>Success!</h1>
      </section>
    );
    window.location.assign("/?action=loggedin");
  }
  if (error) {
    content = (
      <section>
        <h1>{error.error}</h1>
        <h3>{error.error_description}</h3>
      </section>
    );
  }
  return <div className="text-center">{content}</div>;
};

export default LoginCallback;
