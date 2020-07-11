import React from 'react';
import SideMenu from '../components/SideMenu';
import List from '../components/List';


const Home = ({ data, category, changeCategory, isFiltering, filtered }) => {

  return ( 
    <div className="container">
      <div className="row">
    
        <SideMenu changeCategory={changeCategory} category={category} />

        <List data={isFiltering ? filtered : data[category]} category={category} />

      </div>
    </div>
  )
}

export default Home;