import React from 'react'

export default function ServiceCard({ thumbnail, name }) {
  return (
    <div>
      <div className=" md:w-96 md:h-80 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className=" p-8 w-full h-64  rounded-t-lg " src={thumbnail} />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
        </div>
      </div>
    </div>
  )
}
