import fetch from "node-fetch";
import React, { useState, useEffect } from "react";
import config from "../config";
import TimerMixin from "react-timer-mixin";

export default function CachingNotification() {
  function usePromise(url) {
    const [value, setState] = useState(null);
    useEffect(() => {
      let isMounted = true;

      fetch(url)
        .then(async (res) => {
          if (isMounted) {
            const d = await res.json();

            setState(d);
          }
        })
        .catch((error) => console.error(error));

      return () => {
        isMounted = false;
      };
    }, []);
    return value;
  }

  const data = usePromise(`${config.apiURL}/cache/status`);

  let content = null;
  console.log(data);
  if (data && data.completed === false) {
    content = (
      <div class="alert alert-danger" role="alert">
        Caching in progress, results may be incomplete!
      </div>
    );
  }

  return content;
}
