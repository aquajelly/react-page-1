import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let toDoItems;
    if (this.props.todos) {
      {/* We need to map through projectItems as it is an array: */}
      toDoItems = this.props.todos.map(todo => {
        return (
          <ToDoItem key = {todo.title} todo = {todo} />
        )
      });
    }
    return (
      <div className="ToDos">
        <h3>To Do List:</h3>
        {toDoItems}
      </div>
    );
  }
}

{/*This is just a validation for the data type of the stuff in this file, e.g. this checks that the 'todos' array is in fact an array: */}
ToDos.propTypes = {
  todos: PropTypes.array
}

export default ToDos;
