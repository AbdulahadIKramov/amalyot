import React from 'react'
import './postList.css'
import PostlistItem from '../postListItem'

function PostList({ posts, onDelete, onToggleImportant, onToggleLiked}) {

  const elements = posts.map((item) => {
    const { id, ...itemProps } = item
    return (
      <li key={id} className="list-group-itam">
        <PostlistItem  
        {...itemProps} 
        onDelete={()=> onDelete(id)} 
        onToggleImportant={()=> onToggleImportant(id)}
        onToggleLiked={()=> onToggleLiked(id)}
        />
      </li>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList