import React, { useState } from "react";
import axios from "axios";

export default function Post() {
  // Declare state for the user input values
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState(""); // Changed surname to Ogov

  // Handle form submission
  const handleSubmit = () => {
    axios.post("http://localhost:8080/createUser", {
      name,
      ovog // Sending the updated variable
    })
      .then(response => {
        console.log("User created successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error creating the user:", error);
      });
  };

  return (
    <div className="ml-2">
      <div className="flex items-center">
        <p className="text-3xl font-bold">Post page</p>
        <button 
          onClick={handleSubmit}
          className="bg-blue-400 rounded-2xl p-3 m-4 text-2xl text-white cursor-pointer"
        >
          Create users
        </button>
      </div>

      <div className="text-3xl">
        <label>Ner:</label>
        <input 
          type="text" 
          className="border rounded-lg bg-white ml-2 p-3" 
          placeholder="Ner oruulna uu"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="text-3xl space-y-4">
        <label>Ovog:</label>
        <input 
          type="text" 
          className="border rounded-lg bg-white ml-2 p-3" 
          placeholder="Ovog oruulna uu"
          value={ovog} // Changed the state to `ovog`
          onChange={(e) => setOvog(e.target.value)} // Updated to `setOvog`
        />
      </div>
    </div>
  );
}
