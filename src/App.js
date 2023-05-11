import React, { Component } from 'react';
import TodoCard from './TodoCard'
import logo from './logo.svg';
import './App.css';

 class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      text: '',
    }
  }


  // handleClick = () => {
  //   this.state.isClicked ?
  //     this.setState({isClicked : false }) :
  //       this.setState({isClicked : true })
  // }


  onClickHandler = () => {
    
    this.setState({
      ...this.state,
      isClicked: !this.state.isClicked,
    })
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({todos: [...this.state.todos, this.state.text]})
    this.setState({text: ""})
  }

  onAddTodoClicked = () => {
    this.setState({
      todos: [...this.state.text, this.state.todos]
    })
    console.log(this.state)
  }

  deleteItem = (index) => {
    console.log("was cicked", index)
    let copyOfList = this.state.todos
    copyOfList.splice(index, 1)
    this.setState({todos: [...copyOfList]})
  }

  // onChangeHandler = ({ target }) => {
  //   console.log(target.value)

  //   this.setState({
  //     text: target.value,
  //     todos: [...this.state.todos, target.value]
  //   })
  // }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button type='button' onClick={this.onClickHandler}>
          {this.state.isClicked ? 'It is clicked!' : 'It is NOT clicked!'}
          </button>
          <br />
          <form onSubmit = {this.handleSubmit}>
            
          <input type='text' value={this.state.text} onChange={this.handleChange} />
            <button type='submit'>Submit</button>
          {/* <p>{this.state.text}</p> */}
          </form>
          <ol>{this.state.todos.map((todo, index) => {
            return <TodoCard key={index} index={index} title={todo} clickToRemove={this.deleteItem}/>
          })}</ol>
          <p>
            Steve React
          </p>
          {/* <button>Add todo</button> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
