import './App.scss';
import { Provider } from 'react-redux';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import store from './store';
import Navbar from './components/layout/Navbar';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  </Provider>
);

export default App;
