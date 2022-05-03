import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Menubar from "../../../Shared/Menubar/Menubar";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner/Banner";
import InventoryItems from "../InventoryItems/InventoryItems";
import LatestBlog from "../LatestBlog/LatestBlog";
import NewArrivals from "../NewArrival/NewArrivals";

const Home = () => {
  return (
    <>
      <Menubar />
      <main className="mt-8 container mx-auto">
        <PageTitle title={"home"} />
        <Banner />
        <InventoryItems />
        <NewArrivals />
        <LatestBlog />
      </main>
      <Footer />
    </>
  );
};

export default Home;
