import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Catagories = () => {
  return (
    <div className="w-[85%] mx-auto mt-20 ">
        <h1 className="text-center font-bold  mb-12 text-3xl ">Toy Catagories</h1>
      <Tabs>
        <TabList className='text-xl flex justify-between font-semibold'>
          <Tab>Avengers</Tab>
          <Tab>Star Wars</Tab>
          <Tab>Transformars</Tab>
        </TabList>

        <TabPanel className="mt-12">
          <h2>Any content 1</h2>
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
