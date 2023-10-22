import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm, onRemovePlant, onUpdatePlant}) {
  if (!plants || plants.length === 0) {
    return <div>No plants available.</div>;
  }

  const filteredPlants = plants.filter(plantObj => {
    // check name of plant, reurn true if it matches the search term 
    return plantObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  console.log(filteredPlants)
  
  const plantCards = filteredPlants.map((plant) => {
    return <PlantCard
      key={plant.id}
      plant={plant} 
      onRemovePlant={onRemovePlant}
      onUpdatePlant={onUpdatePlant}
      />
  })
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
