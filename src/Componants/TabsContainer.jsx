import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: 'Home', content: 'This is the Home tab content.' },
    { label: 'Profile', content: 'This is the Profile tab content.' },
    { label: 'Settings', content: 'This is the Settings tab content.' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => setActiveTab(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>
      <div style={{ padding: '20px' }}>
        <TabContent content={tabs[activeTab].content} />
      </div>
    </div>
  );
};

export default TabsContainer;
