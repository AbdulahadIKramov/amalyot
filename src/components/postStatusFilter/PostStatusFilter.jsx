import React from 'react'

class PostStatusFilter extends React.Component {
  constructor(prosp) {
    super(prosp);
    this.buttons = [
      {name: 'all', lebal: "All"},
      {name: 'like', lebal: "Liked"}
    ]
  }
  render() {

    const buttons = this.buttons.map(({name, lebal}) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary';
      return(
        <button 
        key={name} 
        className={`btn ${clazz}`}
         type="button"
         onClick={()=> this.props.onFilterSelect(name)}
         >
           {lebal}</button>
      )
    })

    return (
      <div className="btn-group ml-1">
        {buttons}
      </div>
    )
  }
}

export default PostStatusFilter