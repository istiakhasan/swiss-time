import React from "react";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner/Banner";
import InventoryItems from "../InventoryItems/InventoryItems";
import LatestBlog from "../LatestBlog/LatestBlog";
import NewArrivals from "../NewArrival/NewArrivals";


const Home = () => {

return (
<main className="mt-8 container mx-auto">
  <PageTitle title={"home"} />
  <Banner />
  <InventoryItems />
  <NewArrivals />
  <LatestBlog />
</main>
);
};

export default Home;