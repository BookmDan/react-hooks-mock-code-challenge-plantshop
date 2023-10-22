import React, {useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const[searchTerm, setSearchTerm] = useState("")
  console.log(plants);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsArray) => {
        setPlants(plantsArray)
        // console.log(plantsArray)
      })
  }, [])

  //sending newPlant from NewPlantForm
  //1. define callback function
  function handleAddNewPlant(newPlant) {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
    // console.log(newPlant)
  }
  
  function handleUpdatePlant(updatedPlant) {
    // craete a new array of plants
    // swap old plant with updated plants
    console.log(plants)
    const updatedPlants = plants.map(plantObj => {
      if (plantObj.id === updatedPlant.id) {
        return updatedPlant
      } else {
        return plantObj
      }
    })
    setPlants(updatedPlants)
    // console.log(updatedPlants)
  }

  function handleRemovePlant(plantId) {
    // console.log(plantId)
    //create a new array of plants that doesn't have the deleted plant 
    const updatedPlants = plants.filter(plantObj => plantObj.id !== plantId)
    setPlants(updatedPlants)
  }

  function handleUpdateSearch(newSearch) {
    setSearchTerm(newSearch)
  }
      // pass callback as a prop
  return (
    <main>
      <NewPlantForm onAddNewPlant={ handleAddNewPlant} />
      <Search searchTerm={searchTerm} onUpdateSearch={handleUpdateSearch} />
      <PlantList
        plants={plants}
        searchTerm={searchTerm}
        onRemovePlant={handleRemovePlant}
        onUpdatePlant={handleUpdatePlant}
      />
    </main>
  );
}

export default PlantPage;

/*
React CRUD

create: [...] spread
remove: .filter 
udpate: .map
*/