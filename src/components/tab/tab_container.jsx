import "./tab_container.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Section from "../section/section";

const TabContainer = ({ storage, itemProperties }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>쇼케이스</Tab>
        <Tab>냉장</Tab>
        <Tab>냉동</Tab>
        <Tab>실온</Tab>
        <Tab>창고</Tab>
      </TabList>
      <TabPanel>
        <Section
          storage={storage}
          storageType={"showcase"}
          itemProperties={itemProperties}
        />
      </TabPanel>
      <TabPanel>
        <Section
          storage={storage}
          storageType={"refridge"}
          itemProperties={itemProperties}
        />
      </TabPanel>
      <TabPanel>
        <Section
          storage={storage}
          storageType={"freezer"}
          itemProperties={itemProperties}
        />
      </TabPanel>
      <TabPanel>
        <Section
          storage={storage}
          storageType={"bar"}
          itemProperties={itemProperties}
        />
      </TabPanel>
      <TabPanel>
        <Section
          storage={storage}
          storageType={"inven"}
          itemProperties={itemProperties}
        />
      </TabPanel>
    </Tabs>
  );
};

export default TabContainer;
