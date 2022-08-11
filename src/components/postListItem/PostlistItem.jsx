import React from 'react'
import './postListItem.css'

function PostlistItem(props) {

	const { lebal, onDelete, onToggleImportant, onToggleLiked, important, like } = props;

	let className = "app-list-itam d-flex justify-content-between"
	if (important) {
		className += ' important'
	}
	if (like) {
		className += " like"
	}

	return (
		<div className={className}>
			<span style={{ cursor: "pointer" }} className="applist-itam-label" onClick={onToggleLiked}>
				{lebal}
			</span>
			<div className="d-lex justify-content-center align-itams-center">
				<button
					type="button" className="btn-star
                     btn-sm"
					onClick={onToggleImportant}
				>
					<i className="fa fa-star"></i>
				</button>
				<button onClick={onDelete} type="button" className="btn-star btn-sm">
					<i className="fa fa-trash"></i>
				</button>
				<i className="fa fa-heart"></i>
			</div>
		</div>
	)}



	export default PostlistItem
