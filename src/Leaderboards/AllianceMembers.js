import fetch from "node-fetch";
import React, { useState, useEffect } from "react";
import config from "../config";

export default function BalanceLB() {
  function onClick(e) {
    window.location.assign(`/alliances/${e.target.dataset.id}`);
  }

  function usePromise() {
    const [value, setState] = useState(null);
    useEffect(() => {
      let isMounted = true;

      fetch(`${config.apiURL}${config.endpoints.leaderboards}/alliancemembers`)
        .then(async (res) => {
          if (isMounted) {
            const d = await res.json();
            const data = d.data;
            const rows = [];
            for (let i = 0; i < data.length; i++) {
              const row = data[i];
              rows.push(
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <a href="#" data-id={row.id} onClick={onClick}>
                      {row.name}
                    </a>
                  </td>
                  <td>{row.members.toLocaleString()}</td>
                </tr>
              );
            }

            setState(rows);
          }
        })
        .catch((error) => console.error(error));

      return () => {
        isMounted = false;
      };
    }, []);
    return value;
  }

  const data = usePromise();

  let content = <h3>Loading Leaderboard Information....</h3>;
  if (data && !data.error) {
    if (data.length === 0) {
      content = <h3>Oops, there doesn't seem to be any data yet!</h3>;
    } else {
      content = (
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Alliance Name</th>
              <th scope="col">Members</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      );
    }
  } else if (data && data.error) {
    content = (
      <div style={{ marginTop: "20vh" }}>
        <h3>(╯°□°)╯︵ ┻━┻</h3>
        <h3>{data.error}</h3>
      </div>
    );
  }

  return content;
}
