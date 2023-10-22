import React, {useState} from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true)
  const { name, image, price, id } = plant
  
  function handleToggleInStock() {
    setIsInStock(!isInStock)
  }

  function handleDelete() {
    // console.log(id)
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    // .then(r => r.json())
    //   .then((emptyObj)=> {
    //   console.log(emptyObj)
    // }
    //update state
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleInStock}>In Stock</button>
      ) : (
        <button onClick={() => setIsInStock(true)}>Out of Stock</button>
      )}
      <button onClick={ handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
