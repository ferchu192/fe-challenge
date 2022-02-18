import React, { useState } from 'react';

// Components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Styled
import styled from 'styled-components';

const TabContainer = styled.div`
  background-color: white;
`;

const TabContent = styled.div`
  background-color: #f3f3f3;
  padding: 3rem;
`;

const HorizontalTab = ({
  menuItems, // ['id', 'label', 'component']
}) => {
  const [value, setValue] = useState(menuItems[0].id); // 'IDs'
  const [selectedTab, setSelectedTab] = useState(menuItems[0]); // ['id', 'label', 'component']

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const newSelectedTab = menuItems.filter((item) => item.id === newValue);
    setSelectedTab(newSelectedTab[0]);
  };

  if (!value) return <></>;
  return (
    <TabContainer id="horizontal-tab">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="challenge tabs"
        // textColor="primary"
        indicatorColor="primary"
      >
        {
          menuItems.map((item) => <Tab label={item.label} key={`tab-key-${item.label}`} value={item.id}/>)
        }
      </Tabs>
      <TabContent id="tab-content">
        {
          selectedTab.component
        }
      </TabContent>
    </TabContainer>
  )
};

export default HorizontalTab;