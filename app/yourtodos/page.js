'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import { FaEdit, FaTrash } from 'react-icons/fa';


export default function page() {

  const handleEdit = (id) => {
    // Handle edit action for the item with the specified ID
    console.log(`Editing item with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete action for the item with the specified ID
    console.log(`Deleting item with ID ${id}`);
  };
  return (
    <>
    <Navbar/>
    <div className="overflow-x-auto mt-5 mx-20">
        <h2 className="text-xl font-semibold mb-4 text-center">Your Data Table</h2>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-gray-100 text-center">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Sample Name</td>
                <td className="px-4 py-2">Sample Description</td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleEdit(1)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(1)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
              {/* Add more table rows with data and icons as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
   
 
  )
}
