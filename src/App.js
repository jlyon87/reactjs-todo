import React from 'react';
import Title from './components/title';
import TitleForm from './components/todo-form';
import TitleList from './components/todo-list';

let counter = 0;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo(text) {
    const todo = { text, id: ++counter };
    const todos = this.state.todos.slice();
    todos.push(todo);
    this.setState({ todos });
  }

  handleRemove(todoId) {
    const todos = this.state.todos.filter(todo => todo.id !== todoId);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <Title></Title>
        <TitleForm addTodo={this.addTodo.bind(this)}></TitleForm>
        <TitleList
          todos={this.state.todos}
          remove={this.handleRemove.bind(this)}></TitleList>
      </div>
    );
  }
}

export default App;
