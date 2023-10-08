'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {  collection, getDocs, doc } from "firebase/firestore";
import { db } from '@/lib/firebase';


export default function page() {
const [lists, setLists] = useState()

  const fetchData = async () => {

    try {

      const collections = collection(db,'list')
      const docs = await getDocs(collections)
      const listdata = []
      docs.forEach((doc)=>{
        listdata.push({
          id:doc.id,
          ...doc.data()
        })
      })

      setLists(listdata)
      console.log(listdata);

    } catch (error) {
         console.log(error);
    }

  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
      <Navbar />
      <div className="overflow-x-auto mt-5 mx-20">
        <h2 className="text-xl font-semibold mb-4 text-center">Data Table</h2>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
               {lists?.map((item, i)=>{
                return (
                  <tr key={i} className="hover:bg-gray-100 text-center">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.title}</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2">{item.description}</td>
                </tr>

                )
               })}
  
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
