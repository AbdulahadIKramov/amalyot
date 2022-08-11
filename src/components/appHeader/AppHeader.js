import React from 'react'
import './appHeader.css'

function AppHeader({allPosts, liked}) {
  return (
    <div className="app-header d-flex">
        <h1>Abdulahad Ikarmov</h1>
        <h2>{allPosts} posts, like {liked}</h2>
    </div>
  )
}

export default AppHeader