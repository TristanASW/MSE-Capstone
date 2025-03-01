import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import DropdownBox from '../components/Dropdown';

function Front() {
  const [neighbourhood, setNeighbourhood] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [features, setFeatures] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (neighbourhood && buildingType && bedrooms && bathrooms) {
      try {
        console.log(neighbourhood, buildingType, bedrooms, bathrooms, features);
        await axios.post("http://127.0.0.1:8000/submit-search", {
          neighbourhood: neighbourhood,
          building_type: buildingType,
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          features: features
        });
        navigate("/grid");
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };

  //Options for Building Type dropdown
  const options = ['Apartment', 'Detached', 'Townhouse', 'Villa'];

  return (
    <div>
      <NavBar/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Neighbourhood"
          value={neighbourhood}
          onChange={(e) => setNeighbourhood(e.target.value)}
        />
        <DropdownBox 
          options={options} 
          placeholder={"building type"} 
          setSelectedState={setBuildingType} 
        />
        <select
          value={buildingType}
          onChange={(e) => setBuildingType(e.target.value)}
        >
          <option value="">Select Building Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Detached">Detached</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Villa">Villa</option>
        </select>
        <input
          type="number"
          placeholder="Number of Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Number of Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Features (Optional)"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
        />
        <button type="submit" disabled={!neighbourhood || !buildingType || !bedrooms || !bathrooms}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Front;
