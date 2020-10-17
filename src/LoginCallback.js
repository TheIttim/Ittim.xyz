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
    fetch(`${API_URL}/oauth/code?${qParams}`)
      .then((res) => res.json())
      .then(async (res) => {
        console.debug(res);
        if (typeof res === "object") {
          // success
          await fetch("https://discord.com/api/users/@me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${res.access_token}`,
            },
          })
            .then((res2) => res2.json())
            .then((user) => {
              console.debug(user);
              window.localStorage.setItem("token", res.access_token);
              window.localStorage.setItem("user", JSON.stringify(user));
              setLoggedIn(true);
            })
            .catch((e) => setError({ error: e.message }));
        } else if (typeof res === "string") {
          // fail
          const parsed = JSON.parse(res);
          console.error(parsed);
          setError(parsed);
          setLoggedIn(false);
        }
        // console.debug(typeof res);
        // res = JSON.parse(res);
        // if (res.error) {
        //   // error
        //   setError(res);
        //   setLoggedIn(false);
        // } else if (res.access_token) {
        //   window.localStorage.setItem("token", res.access_token);

        //   await fetch("https://discord.com/api/users/@me", {
        //     method: "GET",
        //     headers: {
        //       Authorization: `Bearer ${res.access_token}`,
        //     },
        //   })
        //     .then((res) => res.json())
        //     .then((user) => {
        //       window.localStorage.setItem("user", user);
        //       setLoggedIn(true);
        //     })
        //     .catch((e) => setError({ error: e.message }));
        // }
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
  } else if (error) {
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
