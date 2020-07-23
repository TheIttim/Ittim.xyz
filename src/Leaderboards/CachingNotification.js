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
  if (data && !data.completed) {
    content = (
      <div class="alert alert-danger" role="alert">
        Caching is in progress, results may not be complete!
      </div>
    );
  }

  return content;
}
