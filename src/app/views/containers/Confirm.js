import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserProfileContext } from '../../lib/UserProfileContext';
import { resetCart } from "../../lib/actions";
import '../../App.css';

export const Confirm = () => {
  const userProfile = useContext(UserProfileContext);
  
  const items = useSelector(state => state.items); //la commande

  let total = items.map(i => i.quantity * i.item.price);
  total = total.reduce((item1, item2) => item1 + item2, 0) + 4.50;

  const dispatch = useDispatch();
  const reset = () => { dispatch(resetCart()) } //vider le panier

  return (
    <div className="confirm">
      <div className="text-center">
        <div className="row justify-content-md-center">
          <h4>Votre commande a bien été prise en compte</h4>
        </div>
        <hr />
        <br />

        <h5>Destinataire</h5>
        {userProfile.address && 
          <ul className="address">
            <li>{userProfile.firstName} {userProfile.lastName}</li>
            <li>{userProfile.address}</li>
            <li>{userProfile.zipCode}, {userProfile.city}</li>
          </ul>
        }

        <br />
        <h5>Récapitulatif</h5>

        <table className="table-summary">
          <tbody>
            <tr>
              <th width="50">Produit</th>
              <th width="50">Prix</th>
              <th width="50">Quantité</th>
            </tr>
            {items.map((i) => {
              return (
                <tr key={i.item.ref} className="tr-summary">
                  <td>
                    <img width="50" height="50" src={`./assets/${i.item.category}/${i.item.image}`} alt={i.item.name} />
                    <p>{i.item.name}</p>
                  </td>
                  <td>{i.item.price} €</td>
                  <td>x{i.quantity}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <h6>
          <p>+4.50 euros pour les frais de livraison</p>
        </h6>
        <h6 className="bottom">Prix au total: {total} €</h6>

        <Link className="btn btn-warning btn-sm bottom" to="/" onClick={() => reset()}>
          Retour à la page d'accueil
        </Link>
      </div>
    </div>
  );
};