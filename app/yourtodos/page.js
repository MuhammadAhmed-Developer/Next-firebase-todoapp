"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaEdit, FaTrash } from "react-icons/fa";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function page() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [lists, setLists] = useState();
  const [loading, setLoading] = useState(false);

  const [title, settitle] = useState("");
  const [location, setlocation] = useState("");
  const [description, setdescription] = useState("");

  const openModal = (item) => {
    setSelectedItem(item);
    console.log("itemmmmmmmmmm",item);
    settitle(item.title || "");
    setlocation(item.location || "");
    setdescription(item.description || "");
    setIsModalOpen(true);
  };



  const closeModal = () => {
    setIsModalOpen(false);
  };


  const fetchData = async () => {
    try {
      setLoading(true);
      const collections = collection(db, "list");
      // const queryRef = query(collections, where("location", "==", "Australia"));
      const docs = await getDocs(collections);
      const listdata = [];
      docs.forEach((doc) => {
        listdata.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setLists(listdata);
      // console.log(listdata);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);




  const handleUpdate = async (e) => {
    e.preventDefault();
  
    if (!selectedItem) {
      return;
    }
  
    try {
      const docRef = doc(db, "list", selectedItem.id);
  
      await updateDoc(docRef, {
        title,
        location,
        description,
      });
  
      // Close the modal and clear selected item
      closeModal();
      setSelectedItem(null);
  
      // Fetch updated data
      fetchData();
  
    } catch (error) {
      console.error(error);
    }
  };





  const handleDelete = async (id) => {
    console.log(`Deleting item with ID ${id}`);
    await deleteDoc(doc(db, "list", id));
  };

  return (
    <>
      <Navbar />
      <div className="overflow-x-auto mt-5 mx-20">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Your Data Table
        </h2>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            {loading ? (
              <div className="d-flex justify-start text-center mt-5">
                <span class="loader text-center ml-[70vh] mt-56"></span>
              </div>
            ) : (
              <tbody className="text-gray-700">
                <>
                  {lists?.map((item, i) => {
                    return (
                      <tr key={i} className="hover:bg-gray-100 text-center">
                        <td className="px-4 py-2">{item.id}</td>
                        <td className="px-4 py-2">{item.title}</td>
                        <td className="px-4 py-2">{item.location}</td>
                        <td className="px-4 py-2">{item.description}</td>
                        <td className="px-4 py-2">
                          <button
                            className="text-blue-500 hover:text-blue-700 mr-2"
                            onClick={()=>openModal(item)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDelete(item.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </>
                {/* Add more table rows with data and icons as needed */}
              </tbody>
            )}
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed text-center inset-0 flex items-center justify-center modal-overlay"
          
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded shadow-md w-[90vh]">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-2xl font-semibold mb-6">
                Create a New Entry
              </h1>
              <form onSubmit={handleUpdate} className="mx-auto">
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
                    value={title}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter title"
                    onChange={(e) => settitle(e.target.value)}
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
                    value={location}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    onChange={(e) => setlocation(e.target.value)}
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
                    value={description}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter description"
                    onChange={(e) => setdescription(e.target.value)}
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
        </div>
      )}
    </>
  );
}
