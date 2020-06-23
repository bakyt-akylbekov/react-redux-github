import React from 'react'
import Markdown from 'markdown-to-jsx'
import { useSelector } from 'react-redux'
import HashLoader from 'react-spinners/HashLoader'
import '../assets/scss/readme.scss'

const Readme = () => {
  const readme = useSelector((s) => s.reposMain.readme)
  if (!readme) {
    return (
      <div className="flex items-center justify-center h-64">
        <HashLoader size={50} color="#2c5282" />
      </div>
    )
  }
  return <Markdown className="markdown-body bg-blue-100 border-2 px-10 pt-3">{readme}</Markdown>
}

export default Readme
