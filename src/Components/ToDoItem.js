import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  render() {
    return (
      <div className="ToDo">
        <strong>{this.props.todo.title}</strong>
      </div>
    );
  }
}

{/*This is just a validation for the data type of the stuff in this file, e.g. this checks that the 'todo' object is in fact an object: */}
ToDoItem.propTypes = {
  todo: PropTypes.object
}

export default ToDoItem;
