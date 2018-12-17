import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories: [
      'Examples',
      'Example Ting',
      'Examples Innit'
    ]
  }

  handleSubmit(e){
    if (this.refs.title.value === '') {
      alert("Title can't be blank!");
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key = {category} value = {category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" /><br />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select><br /><br />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

{/*This is just a validation for the data type of the stuff in this file, e.g. this checks that the 'categories' array is in fact an array: */}
AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
