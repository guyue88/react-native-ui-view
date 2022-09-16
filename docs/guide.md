# 快速开始

### 安装

```shell
npm i react-native-ui-view --save
```

### 初始化

```javascript
import React from 'react';
import { Portal } from 'react-native-ui-view';

const App: React.FC<{}> = () => {
  // Modal/Toast的函数调用方式需要使用 Portal 包裹整个应用
  return <Portal>{/* xxx */}</Portal>;
};
AppRegistry.registerComponent(appName, () => app);
```

### 使用

```javascript
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-ui-view';

const App: React.FC<{}> = () => {
  return (
    <View>
      <Button>我是按钮</Button>
    </View>
  );
};
```
