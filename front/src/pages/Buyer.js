import React from "react";
import { Link } from "react-router-dom";

const Buyer = () => {
  return (
    <div>
      <h2>Buyer Page</h2>
      <li><Link to="/seller">Seller</Link></li>
    </div>
  );
};

export default Buyer;
