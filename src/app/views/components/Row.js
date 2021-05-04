import React, { useState, useEffect } from 'react';
import { updateCart, removeFromCart } from '../../lib/actions';
import { useDispatch } from 'react-redux';

const Row = ({ i, index, size }) => {

  const [qty, setQty] = useState(i.quantity); //qty valeur locale, quantity pour l'init en tant que getteur

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCart(i.id, qty))
  }, [dispatch, i.id, qty]);

  const remove = id => dispatch(removeFromCart(id));

  return (
    <tr className={size > 1 && size-1 > index ? "tr-row" : null}>
      <td className="td-row">
        <img width="100" height="100" src={`./assets/${i.item.category}/${i.item.image}`} alt={i.item.name} />
        <p>{i.item.name}</p>
      </td>
      <td>#{i.item.ref}</td>
      <td>{i.item.price} €</td>

      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-warning btn-sm" onClick={() => { if (qty > 1) setQty(qty - 1) }}>
            -
          </button>
          <span className="btn btn-light">{qty}</span>
          <button type="button" className="btn btn-warning btn-sm" onClick={() => setQty(qty + 1) }>
            +
          </button>
        </div>
      </td>
      <td>{(i.quantity * i.item.price).toFixed(2)} €</td>
      <td>
        <button type="button" className="btn btn-danger remove" onClick={() => remove(i.id)}>
          X
        </button>
      </td>
    </tr>
  );
};

export default Row;