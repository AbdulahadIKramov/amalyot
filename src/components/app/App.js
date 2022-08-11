import React from 'react'
import "./App.css"
import AppHeader from '../appHeader'
import PostAddFrom from '../postAddForm'
import PostList from '../postList/PostList'
import PostStatusFilter from '../postStatusFilter'
import SearchPanel from '../searchPanel'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { lebal: "Going to learn React Js", important: false, like: false, id: 1 },
        { lebal: "That is so good", important: false, like: false, id: 2 },
        { lebal: "I need a beak...", important: false, like: false, id: 3 },
      ],
      term: "",
      filter: "all"
    }
    this.delteItem = this.delteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearchApp = this.onUpdateSearchApp.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)

    this.maxId = 4;
  }

  addItem(body) {
    const newItem = {
      lebal: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  delteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id)

      const before = data.slice(0, index)
      const after = data.slice(index + 1)
      const newArry = [...before, ...after]

      return {
        data: newArry
      }

    })
  }




  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldItem = data[index]
      const newItem = { ...oldItem, important: !oldItem.important }

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }

    })

  }
  onToggleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldItem = data[index]
      const newItem = { ...oldItem, like: !oldItem.like }

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }

    })
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.lebal.indexOf(term) > -1
    })
  }
  
  onUpdateSearchApp(term) {
    this.setState({term})
  }

  filterPost(items, filter) {
    if(filter === 'like'){
      return items.filter(item => item.like)
    }else{
      return items
    }
  }
  onFilterSelect(filter){
    this.setState({filter})
  }

  render() {

    const { term, data, filter } = this.state
    const liked = data.filter(item => item.like).length
    const allPosts = data.length

    const visiblePost = this.filterPost(this.searchPost(data, term), filter)

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="rearch-panel d-flex">
          <SearchPanel onUpdateSearchApp={this.onUpdateSearchApp} />
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList
          posts={visiblePost}
          onDelete={this.delteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddFrom onAdd={this.addItem} />
      </div>
    )
  }
}
