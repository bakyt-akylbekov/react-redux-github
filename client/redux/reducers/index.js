import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import repos from './repos'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    reposMain: repos
  })

export default createRootReducer
