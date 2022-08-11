import React from 'react'
import './postAddForm.css'

class PostAddFrom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
		this.onValueChange = this.onValueChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onValueChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.state.text)
		this.setState({text: ""})
	}


	render() {

		return (
			<form className="botton-panel d-flex" onSubmit={this.onSubmit}>
				<input
					required
					type="text"
					placeholder="What are you thinking about ?"
					className="form-control new-post-label"
					value={this.state.text}
					onChange={this.onValueChange}
				/>
				<button
					type="submit"
					className="btn btn-outline-secondary"
				>
					Add Post
				</button>
			</form>
		)
	}
}

export default PostAddFrom