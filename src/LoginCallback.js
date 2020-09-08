import React, { useState, useEffect } from "react";

import config from "./config";
const { client_id, client_secret, redirect_uri } = config;

// const generateState = () => {
//   return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// };

const LoginCallback = ({ location }) => {
  function usePromise() {
    const [value, setState] = useState(null);
    useEffect(() => {
      const code = (location.search.match(/code=([^&]+)/) || [])[1];
      // const state = (location.search.match(/state=([^&]+)/) || [])[1];

      const params = {
        client_id,
        client_secret,
        grant_type: "authorization_code",
        code,
        redirect_uri,
        scope: "identify",
      };

      fetch(`https://discord.com/api/oauth2/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(params),
      })
        .then(async (res) => {
          const json = await res.json();
          json.status = res.status;
          return json;
        })
        .then(async (res) => {
          if (res.access_token) {
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
                setState({});
              })
              .catch((e) => setState({ error: e }));
          } else {
            setState({ error: res.error, status: res.status });
          }
        })
        .catch((e) => {
          console.error(e);
          setState({ error: e });
        });

      return () => {
        // isMounted = false;
      };
    }, []);
    return value;
  }

  const data = usePromise();

  let content = <h3>Loading....</h3>;

  if (data && data.error) {
    content = (
      <section>
        <h1>Error!</h1>
        <h3>
          {data.status} - {data.error}
        </h3>
      </section>
    );
  } else if (data && !data.error) {
    content = (
      <section>
        <h1>Success!</h1>
      </section>
    );
    window.location = "/devdash";
  }
  return <div className="text-center">{content}</div>;
};

export default LoginCallback;
