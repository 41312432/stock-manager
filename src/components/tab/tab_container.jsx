import React from "react";
import "./tab_container.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabContainer = (props) => (
  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanel>내용 1</TabPanel>
    <TabPanel>내용 2</TabPanel>
  </Tabs>
);

export default TabContainer;
