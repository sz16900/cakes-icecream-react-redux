import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
