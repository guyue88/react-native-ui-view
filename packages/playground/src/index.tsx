import React from 'react';
import { Portal } from 'react-native-ui-view';
import { Router } from './core/router';

import './pages/Home';
import './pages/Icon';
import './pages/Modal';
import './pages/Toast';
import './pages/Badge';
import './pages/Search';
import './pages/IndexList';
import './pages/Button';

const App = () => {
  return (
    <Portal>
      <Router />
    </Portal>
  );
};

export default App;
