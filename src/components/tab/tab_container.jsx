import React from "react";
import "./tab_container.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Section from "../section/section";

const TabContainer = (props) => (
  <Tabs>
    <TabList>
      <Tab>Tab1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanel>
      <Section />
    </TabPanel>
    <TabPanel>
      <Section />
    </TabPanel>
  </Tabs>
);

export default TabContainer;
