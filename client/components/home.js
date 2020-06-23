import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import RepoList from './repo-list'
import Readme from './readme'
import { setRepos, setReadme, setUser } from '../redux/reducers/repos'
import Header from './header'

const Home = () => {
  const { userName, userRepos } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setRepos(userName))
    if (userRepos !== undefined) {
      dispatch(setReadme(userName, userRepos))
    }
    dispatch(setUser(userName))
  })
  return (
    <div>
      <Header />
      <div className="container mx-auto px-12 py-6">
        <Route exact path="/:userName" component={() => <RepoList />} />
        <Route exact path="/:userName/:userRepos" component={() => <Readme />} />
      </div>
    </div>
  )
}

export default Home
