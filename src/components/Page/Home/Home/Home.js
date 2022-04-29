import React from "react";
import Banner from "../Banner/Banner/Banner";
import InventoryItems from "../InventoryItems/InventoryItems";

const Home = () => {
  return (
    <main className="mt-8 container mx-auto">
      <Banner />
      <InventoryItems />
    </main>
  );
};

export default Home;
