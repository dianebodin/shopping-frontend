import React from 'react';
import Modal from './Modal';


const Card = ({ item }) => {

  return (
    <div className="col-sm-4">
      <div className="card">
        <img src={`./assets/${item.category}/${item.image}`} alt={item.name} />
        
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <p>{item.name}</p>
            </div>
            <div className="col-sm-6">
              <p>€{item.price}/{item.unit}</p>
              <button className="btn btn-warning btn-sm see-detail" data-toggle="modal" data-target={`#${item.ref}`}>voir le détail</button>
            </div>
          </div>
        </div>

      </div>

      <Modal item={item} />

    </div>
  );
};

export default Card;