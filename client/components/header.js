import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../redux/reducers/repos'

const Header = () => {
  const user = useSelector((s) => s.reposMain.user)
  const readme = useSelector((s) => s.reposMain.readme)
  const dispatch = useDispatch()
  const { userName } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-800 py-4 px-24">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="#">
          <img src={`${user.avatar_url}`} alt="" className="w-12 h-12 rounded-md border mr-5" />
        </a>
        <NavLink to="/" className="text-white font-bold mr-5">
          Home
        </NavLink>
        {readme && (
          <NavLink to={`/${userName}`} className="text-white font-bold">
            Repositories
          </NavLink>
        )}
      </div>
      <input
        type="text"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search"
        className="bg-gray-200 border border-blue-600 rounded text-black pl-2"
      />
    </nav>
  )
}

export default React.memo(Header)
