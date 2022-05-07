import React, { useState } from 'react';
import { TabBar, TabBarItem, Theme } from 'react-native-ui-view';

import compIcon from '../../images/tabbar/comp.png';
import compSelectedIcon from '../../images/tabbar/comp-selected.png';
import toolIcon from '../../images/tabbar/tool.png';
import toolSelectedIcon from '../../images/tabbar/tool-selected.png';

import Comp from './tabs/comp';
import Tools from './tabs/tools';
import { PageContainer } from '../../core/router';
import { MODULES } from '../../core/constants';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabList = [
    {
      title: '组件',
      icon: compIcon,
      selectedIcon: compSelectedIcon,
      content: <Comp />,
    },
    {
      title: '工具',
      icon: toolIcon,
      selectedIcon: toolSelectedIcon,
      content: <Tools />,
    },
  ];

  return (
    <>
      <TabBar>
        {tabList.map((item, index) => (
          <TabBarItem
            key={index}
            title={item.title}
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            selected={index === activeIndex}
            onPress={() => setActiveIndex(index)}
            badge={1}
          >
            {item.content}
          </TabBarItem>
        ))}
      </TabBar>
    </>
  );
};

PageContainer(MODULES.HOME, HomePage);
