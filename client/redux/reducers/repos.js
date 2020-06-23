import axios from 'axios'

const initialState = {
  repos: [],
  readme: '',
  user: {},
  search: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return { ...state, repos: action.repos }
    case 'SET_README':
      return { ...state, readme: action.readme }
    case 'SET_USER':
      return { ...state, user: action.user }
    case 'SET_SEARCH':
      return { ...state, search: action.search }
    default:
      return state
  }
}

export function setRepos(user) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${user}/repos`).then(({ data }) =>
      dispatch({ type: 'SET_REPOS', repos: data })
    )
  }
}

export function setReadme(user, repo) {
  return (dispatch) => {
    axios(`https://api.github.com/repos/${user}/${repo}/readme`, {
      headers: { Accept: 'application/vnd.github.VERSION.raw' }
    }).then(({ data }) => dispatch({ type: 'SET_README', readme: data }))
  }
}

export function setUser(userName) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) =>
      dispatch({ type: 'SET_USER', user: data })
    )
  }
}

export function setSearch(searchStr) {
  return { type: 'SET_SEARCH', search: searchStr }
}
