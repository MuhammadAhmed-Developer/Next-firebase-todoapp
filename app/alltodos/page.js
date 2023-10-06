import React from 'react'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <>
    <Navbar/>
    <div className="overflow-x-auto mt-5 mx-20">
      <h2 className="text-xl font-semibold mb-4 text-center">Data Table</h2>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody className="text-gray-700">
           
              <tr className="hover:bg-gray-100 text-center">
                <td className="px-4 py-2">Titkeld</td>
                <td className="px-4 py-2">country</td>
                <td className="px-4 py-2">descr z, zjfzjf jzhf kjzf</td>
                {/* Add more table cells for additional columns */}
              </tr>
              <tr className="hover:bg-gray-100 text-center">
                <td className="px-4 py-2">Titkeld</td>
                <td className="px-4 py-2">country</td>
                <td className="px-4 py-2">descr z, zjfzjf jzhf kjzf</td>
                {/* Add more table cells for additional columns */}
              </tr>
          
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
