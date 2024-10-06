import React from 'react'
import { MdDelete } from "react-icons/md";

export default function ServiceAdmin({ thumbnail, name, _id, handleDelete }) {
  return (
    <div>
      <div className="w-64 flex flex-col bg-white border border-gray-300 border-t-4 border-t-blue-600 shadow-sm rounded-xl ">
        <div className="p-4 w-64 md:p-5">
          <img className='w-full h-36 border border-gray-300' src={thumbnail} alt="image" />
          <h2 className='font-semibold text-sm mt-1' >{name}</h2>
          <button onClick={() => handleDelete(_id)} className='float-right bg-blue-600 p-1.5 text-white rounded-full text-lg md:hover:scale-105 transition-all duration-200 ease-linear mt-1'><MdDelete /></button>
        </div>
      </div>
    </div>
  )
}
