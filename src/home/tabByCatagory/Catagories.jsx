import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Avengers from "./Avengers";

const Catagories = () => {
  const [tabData,setTabData]=useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/avengers")
      .then((res) => res.json())
      .then((data) => {
        setTabData(data)
      });
  }, []);

  const handleAvengersData=()=>{
      fetch("http://localhost:5000/avengers")
        .then((res) => res.json())
        .then((data) => {
          setTabData(data)
        });
  }

console.log(tabData);
  return (
    <div className="w-[85%] mx-auto mt-20 ">
        <h1 className="text-center font-bold  mb-12 text-3xl ">Shop by Category</h1>
      <Tabs>
        <TabList className='text-xl flex justify-between font-semibold'>
          <Tab onClick={handleAvengersData}>Avengers</Tab>
          <Tab>Star Wars</Tab>
          <Tab>Transformars</Tab>
        </TabList>

        <TabPanel className="mt-12">
          <h1 className="text-center text-pink-500 text-3xl font-bold">Our Avengers Collection</h1>
          <div className="grid gap-6  grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
              {
                tabData.map(singleData =><Avengers key={singleData._id} data={singleData} ></Avengers>)
              }
          </div>
        </TabPanel>
        <TabPanel className="mt-12">
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel className="mt-12">
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Catagories;
