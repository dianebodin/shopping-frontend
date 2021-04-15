import React from 'react';

const SideMenu = ({ changeCategory, category }) => {

  const links = ["Fruits", "Légumes", "Crémerie", "Epicerie", "Boissons"];
  
  return (
    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index} onClick={() => changeCategory(index)} className={`focus ${category === index ? "active" : null}`}>
              {link}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default SideMenu;