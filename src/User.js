import React from "react";
import MetaTags from "react-meta-tags";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch("HZGS0CHT9D", "860794aefc7e548dbc0413ee8714ec5d");

const UserSearch = () => {
  return (
    <div className="app">
      <MetaTags>
        <title>Mogul Development | User Search</title>
        <link rel="canonical" href={`https://www.moguldevs.xyz/search`} />
        <meta property="og:title" content="Mogul Development | User Search" />
        <meta property="og:url" content={`https://moguldevs.xyz/search`} />
        <meta property="og:image" content="https://moguldevs.xyz/TM_icon.png" />
        <meta
          property="og:description"
          content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
        />
      </MetaTags>
      <InstantSearch searchClient={searchClient} indexName="dev_TM">
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
};

export default UserSearch;
