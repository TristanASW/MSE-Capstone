import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Seller = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/items")
      .then(response => {
        setItems(response.data.items);
      })
      .catch(error => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

  return (
    <div>
      <h2>Seller Page</h2>
      <li><Link to="/buyer">Buyer</Link></li>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seller;
