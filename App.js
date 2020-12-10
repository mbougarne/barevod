import React from 'react';
import { Provider } from 'react-redux';
import Tabs from './navigation/Tab';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
};

export default App;
