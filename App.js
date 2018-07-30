import React, {Component} from 'react';
import './App.css';
import SingleTodo from './singletodo';
import todo from './todo.png'
//importing every files to work 
//clas app child class and Component is parent class
class App extends Component {
  constructor() {
    super(); //we need to call super to use this
    this.state = {
      todos: [],
        currentodo: "", 
      
    };
}
//oninputchange is use to change the previous state to bew state 
onInputChange = e => {
  this.setState({currentodo: e.target.value });
}
//in this function todoscopy is created when onclick is clicked items will be added 
onClick = () => {
  let todoscopy = this.state.todos.slice();
  todoscopy.push(this.state.currentodo);

  this.setState({todos: todoscopy, currentodo: ""});
};
//using deletetodo function items will be deleted
deleteTodo = i => {
  let todoscopy = this.state.todos.slice();
  todoscopy.splice(i ,1);

  this.setState({todos: todoscopy});
}
//whatever user want to see on the screen add in the render function and return what u want to see
render() {
  let bulletedlist = this.state.todos.map((e ,i) => {
     return (
    <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
      )
  });
  return (
    <div>
    <img id="img" src={todo} alt="todo" />
    <h1 className="hitag">TODO APP</h1>
    <input className="inputtag" placeholder="Enter Todos..." value={this.state.currentodo} onChange={this.onInputChange}/>
    <button className="buttonAdd" onClick={this.onClick}>+</button>
    <br />
    {this.state.todos.length === 0 ? <h3 className="h3tag">No Todos Today</h3> : <ol className="oltag">{bulletedlist}</ol>}
    </div>
    );
}

}

export default App;
