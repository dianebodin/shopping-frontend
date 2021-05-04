import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";
import { UserProfileContext } from '../../lib/UserProfileContext';

const Checkout = () => {

  const [isValid, setIsValid] = useState(false);
  const value = useContext(UserProfileContext);

  const { firstName, lastName, email, address, zipCode, city, setUserProfileContext } = value; //destructuration
 
  const validate = () => {
    let errors = [];
    const inputs = document.querySelectorAll(".form-control"); //récupère les inputs correspondants
    inputs.forEach(input => {
      !input.value ? errors.push(input) : errors.length && errors.pop(); //on ajoute si champs non valide, sinon on supprime 
    })
    setIsValid(!errors.length);
  };

  useEffect(() => {
    validate();
  });

  const handleProfileContext = e => setUserProfileContext({ [e.target.name]: e.target.value });

  return (
    <div className="col-sm-6 offset-3">
      <h2>Mes informations personnelles</h2>
      <br />
      <form>
        <div className="row">
          <div className="col">
            <input 
              type="text" 
              className="form-control" 
              name="firstName" 
              placeholder="Prénom" 
              property="" 
              defaultValue={firstName} 
              onChange={handleProfileContext} 
            />
          </div>
          <div className="col">
            <input 
              type="text" 
              className="form-control" 
              name="lastName" 
              placeholder="Nom" 
              property="" 
              defaultValue={lastName} 
              onChange={handleProfileContext} 
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            name="email" 
            placeholder="Email" 
            property="" 
            defaultValue={email} 
            onChange={handleProfileContext}
          />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            name="address" 
            placeholder="Adresse" 
            property="" 
            defaultValue={address} 
            onChange={handleProfileContext} 
          />
        </div>
        <div className="row">
          <div className="col">
            <input 
              type="text" 
              className="form-control" 
              name="zipCode" 
              placeholder="Code postal" 
              property="" 
              defaultValue={zipCode} 
              onChange={handleProfileContext} 
            />
          </div>
          <div className="col">
            <input 
              type="text" 
              className="form-control" 
              name="city" 
              placeholder="Ville" 
              property="" 
              defaultValue={city} 
              onChange={handleProfileContext} 
            />
          </div>
        </div>
        <br />

        <Link to="/confirm" className={`white btn btn-light btn-lg btn-block checkout ${!isValid ? "disabled" : ""} bg-crimson`}>
          Confirmer
        </Link>
      </form>
    </div>
  );
};

export default Checkout;