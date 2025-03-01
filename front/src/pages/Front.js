import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Page1() {
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
        await axios.post("http://127.0.0.1:8000/submit-form", {
          neighbourhood,
          building_type: buildingType,
          bedrooms,
          bathrooms,
          features
        });
        navigate("/grid");
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };

  return (
    <div>
      <h1>Find a House</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Neighbourhood"
          value={neighbourhood}
          onChange={(e) => setNeighbourhood(e.target.value)}
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
          onChange={(e) => setBedrooms(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
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

export default Page1;
