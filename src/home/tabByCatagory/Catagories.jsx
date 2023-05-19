import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CatagoryCard from "./CatagoryCard";

const Catagories = () => {
  const [select,setSelect]=useState("Avengers")
  const [tabData,setTabData]=useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/catagory/${select}`)
      .then((res) => res.json())
      .then((data) => {
        setTabData(data)
      });
  }, [select]);

  return (
    <div className="w-[85%] mx-auto mt-20 ">
        <h1 className="text-center font-bold  mb-12 text-3xl ">Shop by Category</h1>
      <Tabs>
        <TabList className='text-xl flex justify-between font-semibold'>
          <Tab onClick={()=>setSelect("Avengers")} >Avengers</Tab>
          <Tab onClick={()=>setSelect("Star Wars")} >Star Wars</Tab>
          <Tab onClick={()=>setSelect("Transformars")}>Transformars</Tab>
        </TabList>

        <TabPanel className="mt-12">
          <h1 data-aos="fade-up"  className="text-center  text-pink-500 text-3xl font-bold">Our Avengers Collection</h1>
          <div className="grid gap-6  grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
            {
                tabData.map(singleData =><CatagoryCard key={singleData._id} data={singleData} ></CatagoryCard>)
              }
          </div>
        </TabPanel>
        <TabPanel className="mt-12">
        <h1 data-aos="fade-up"  className="text-center text-pink-500 text-3xl font-bold">Our StarWars Collection</h1>
          <div className="grid gap-6  grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
              {
                tabData.map(singleData =><CatagoryCard key={singleData._id} data={singleData} ></CatagoryCard>)
              }
          </div>
        </TabPanel>
        <TabPanel className="mt-12">
        <h1 data-aos="fade-up"  className="text-center text-pink-500 text-3xl font-bold">Our Transformers Collection</h1>
          <div className="grid gap-6  grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
               {
                tabData.map(singleData =><CatagoryCard key={singleData._id} data={singleData} ></CatagoryCard>)
              }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Catagories;
