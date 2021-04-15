import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './views/components/Navbar';
import Home from './views/containers/Home';
import Cart from './views/containers/Cart';
import Checkout from './views/containers/Checkout';
import { data } from '../data';
import UserProfileContextProvider from './lib/UserProfileContext';
import { Confirm } from './views/containers/Confirm';

const App = ({ items, saveLocalStorage }) => { //provenant de AppContainer

  const [category, setCategory] = useState(0);
  const changeCategory = i => setCategory(i);

  const [isFiltering, setIsFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const filter = (input) => {
    let results = data.flat().filter(item => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(results);
  };

  useEffect(() => {
    saveLocalStorage(items);
  }, [saveLocalStorage, items]);

  return (
    <Router>
      <UserProfileContextProvider>
        <Navbar filter={filter} setIsFiltering={setIsFiltering} />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/confirm">
            <Confirm />
          </Route>
          <Route path="/">
            <Home data={data} category={category} changeCategory={changeCategory} isFiltering={isFiltering} filtered={filtered} />
          </Route>
        </Switch>
      </UserProfileContextProvider>
    </Router>
  );
};

export default App;