import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
const renderContent = {
  1: (
    <div className="card bg-gray-300 py-2 px-2 rounded-xl">
      <div className="max-w-sm w-full flex items-center">
        <div
          className="h-24 w-24 flex-none bg-cover rounded"
          style={{ backgroundImage: `url('src/Images/dineh.jpg')` }}
          title="Sriram Image"
        ></div>
        <div className="ml-4 flex flex-col">
          <h4 className="blue-gradient_text font-semibold drop-shadow text-lg">V DINESH</h4>
          <span className="text-gray-900 font-bold ">The Captain</span>
          <Link to="https://dineshhportfolio.carrd.co/">
            <button className="bg-blue-400 hover:bg-blue-600 py-1 px-1 text-white font-bold  rounded flex items-center">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  ),
  2: (
    <div className="card bg-gray-300 py-2 px-2 rounded-xl">
      <div className="max-w-sm w-full flex items-center">
        <div
          className="h-24 w-24 flex-none bg-cover rounded"
          style={{ backgroundImage: `url('src/Images/sriram.jpg')` }}
          title="Sriram Image"
        ></div>
        <div className="ml-4 flex flex-col">
          <h4 className="blue-gradient_text font-semibold drop-shadow text-lg">B  SRIRAM</h4>
          <span className="text-gray-900 font-bold  ">The All-Rounder</span>
          <Link to="https://sriramportfolio.carrd.co">
            <button className="bg-blue-400 hover:bg-blue-600 py-1 px-1 text-white font-bold  rounded flex items-center">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  ),
  3: (
    <div className="card bg-gray-300 py-2 px-2 rounded-xl">
      <div className="max-w-sm w-full flex items-center">
        <div
          className="h-24 w-24 flex-none bg-cover rounded"
          style={{ backgroundImage: `url('src/Images/tejesh.jpg')` }}
          title="Sriram Image"
        ></div>
        <div className="ml-4 flex flex-col">
          <h4 className="blue-gradient_text font-semibold drop-shadow text-lg">P TEJESH</h4>
          <span className="text-gray-900 font-bold  ">The Specialist</span>
          <Link to="https://tejeshportfolio.carrd.co/">
            <button className="bg-blue-400 hover:bg-blue-600 py-1 px-1 text-white font-bold  rounded flex items-center">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  ),
  4: (
    <div className="card bg-gray-300 py-2 px-2 rounded-xl">
      <div className="max-w-sm w-full flex items-center">
        <div
          className="h-24 w-24 flex-none bg-cover rounded"
          style={{ backgroundImage: `url('src/Images/mu.jpg')` }}
          title="Sriram Image"
        ></div>
        <div className="ml-4 flex flex-col">
          <h4 className="blue-gradient_text font-semibold drop-shadow text-lg">N MURALI</h4>
          <span className="text-gray-900 font-bold ">The Bug-Fixer</span>
          <Link to="https://muraliportfolio.carrd.co/">
            <button className="bg-blue-400 hover:bg-blue-600 py-1 px-1 text-white font-bold  rounded flex items-center">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  ),
}
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo