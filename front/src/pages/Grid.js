import React, { useEffect, useState } from "react";
import axios from "axios";

function Page2() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/houses");
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching house data", error);
      }
    };

    fetchHouses();
  }, []);

  const handleModal = (house) => {
    alert(`More info about house: ${house.location}`);
  };

  return (
    <div>
      <h1>House Listings</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {houses.map((house) => (
          <div
            key={house.id}
            onClick={() => handleModal(house)}
            style={{
              border: "1px solid black",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <img src={house.image_url} alt={house.location} style={{ width: "100%", height: "auto" }} />
            <p>{house.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
