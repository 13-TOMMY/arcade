import React from "react";
import BannerCard from "../components/BannerCard";
import Join from "../components/Join";
import Featured from './../components/Featured';

function Homepage() {
  return (
    <div>
      <BannerCard />
      <Featured />
      <Join />
    </div>
  );
}

export default Homepage;
