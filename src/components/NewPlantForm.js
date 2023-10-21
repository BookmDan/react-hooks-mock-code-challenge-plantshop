import React, {useState} from "react";

//3. destructure the prop
function NewPlantForm({onAddNewPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e) {
    // 1. prevent default from refreshing 
    e.preventDefault()
    // 2. gather data for request
    const formData = {
      "name": name,
      "image": image,
      "price": parseFloat(price),
    }
    // console.log(formData)


  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then(newPlant => {
      // console.log("Success:", newPlant)
      // update state in PlantPage
      //4. call the callback function with whatever data we are sending up
      onAddNewPlant(newPlant)
  })
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name}
          onChange={e =>setName(e.target.value)}
        />
        <input type="text" name="image" placeholder="Image URL" value={image}
          onChange={e =>setImage(e.target.value)}
        />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price}
         onChange={e =>setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
