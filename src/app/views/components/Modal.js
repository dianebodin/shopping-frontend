import React, { useState } from 'react';
import { addToCart } from '../../lib/actions';
import { useDispatch } from 'react-redux';


const Modal = ({ item }) => {

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const add = (item, quantity) => dispatch(addToCart(item, quantity));
  

  return (
    <div className="modal fade" id={item.ref} data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{item.name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
              <img width="180" height="180" src={`./assets/${item.category}/${item.image}`} alt={item.name} />
              </div>

              <div className="col-sm">
                <p className="lead">
                  {item.description}
                </p>
                <h3 className="price">{item.price} €</h3> 
                <br />
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button onClick={() => qty > 1 ? setQty(qty-1) : 1} type="button" className="btn btn-warning btn-sm">
                    -
                  </button>
                  <span className="btn btn-light qty">{qty}</span>
                  <button onClick={() => setQty(qty+1)} type="button" className="btn btn-warning btn-sm">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Retour
            </button>
            <button onClick={() => add(item, qty)} type="button" className="btn btn-success" data-dismiss="modal">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;