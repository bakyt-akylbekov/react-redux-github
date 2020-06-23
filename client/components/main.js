import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [userName, setUserName] = useState('')
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push(`/${userName}`)
    }
  }
  return (
    <div className="h-screen bg-blue-800 flex">
      <div className="m-auto bg-blue-200 p-12 rounded-md ">
        <div className="flex items-center justify-center">
          <img
            className="h-10 w-10 rounded-lg "
            src="https://image.flaticon.com/icons/svg/25/25657.svg"
            alt=""
          />
        </div>
        <div id="title" className="text-center text-2xl font-semibold mt-5 mb-6">
          User`s repository search
        </div>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleSearch}
          value={userName}
          className="bg-gray-200 border border-blue-600 rounded text-black p-3 mr-3"
          placeholder="Enter Username"
        />
        <button
          type="button"
          onClick={() => history.push(`/${userName}`)}
          className="bg-blue-800 hover:bg-blue-700 rounded text-white p-3"
        >
          Find
        </button>
      </div>
    </div>
  )
}

export default Main
