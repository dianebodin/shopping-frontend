import React from 'react';
import Row from './Row';

const Table = ({ items }) => (
  <table>
    <tbody>
      <tr>
        <th width="100">Produit</th>
        <th width="160">Référence</th>
        <th width="120">Prix</th>
        <th width="180">Quantité</th>
        <th width="160">Total</th>
      </tr>
      {items.map((item, index) => <Row key={item.item.ref} i={item} index={index} size={items.length} />)}
    </tbody>
  </table>
);

export default Table;