'use client'
import { useState } from "react";
import Navbar from "./components/Navbar";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/lib/firebase";
export default function Home() {
  const countries = [
    "Pakistan",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Spain",
    "Italy",
    "Japan",
    "China",
    "Brazil",
    "Mexico",
    "India",
    "South Korea",
    "Russia",
    "Argentina",
    "South Africa",
    "Egypt",
    "Saudi Arabia",
    "United States",
    "Nigeria",
    "Indonesia",
    "Turkey",
    "Greece",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Hungary",
    "Poland",
    "Czech Republic",
    "Chile",
    "Peru",
    "Colombia",
    "Canada",
    "New Zealand",
    "Thailand",
    "Malaysia",
    "Singapore",
    "Vietnam",
    "Philippines",
    "Iran",
    "Iraq",
    "Israel",
    "Jordan",
  ];

  const [title, settitle] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit =async (e) =>{
     e.preventDefault()
     let list = {
      title,
      location,
      description
     }
     console.log(title,location,description);
     try {
      const docRef = await addDoc(collection(db, "list"), list);
      console.log("Document written with ID in firebase : ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-3/4 lg:w-2/3 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create a New Listing
          </h2>
          <form onSubmit={handleSubmit} className="mx-auto">
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter title"
                onChange={(e)=>settitle(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-600"
              >
                Location
              </label>
              <select
                id="location"
                name="location"
                className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e)=>setlocation(e.target.value)}
              >
                <option value="" disabled>
                  Select location
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter description"
                onChange={(e)=>setdescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-500 text-white py-3 w-[75%] px-6 rounded-lg hover:bg-purple-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
