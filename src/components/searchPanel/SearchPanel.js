import React from 'react'
import './searchPanel.css'

class SearchPanel extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         term: ""
      }
      this.onUpdateSearch = this.onUpdateSearch.bind(this)
   }
   
   onUpdateSearch(e){
      const term = e.target.value;
      this.setState({term})
      this.props.onUpdateSearchApp(term)
   }

   render() {
      return (
         <input
            onChange={this.onUpdateSearch}
            required
            type="text"
            className="form-control rearch-input"
            placeholder="Seach by pots"
         />
      )
   }
}

export default SearchPanel