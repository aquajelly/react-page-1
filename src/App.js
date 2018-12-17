import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import ToDos from './Components/ToDos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }


  getToDos(){
    {/* This is where we link to the external To-Do's API:*/}
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Example Website',
        category: 'Examples'
      },
      {
        id: uuid.v4(),
        title: 'Example App',
        category: 'Example Ting'
      },
      {
        id: uuid.v4(),
        title: 'Example Game',
        category: 'Examples Innit'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getToDos();
  }

  componentDidMount(){
    this.getToDos();
  }

  handleAddProject(project){
    {/* Set up a variable containing all the projects in the current state: */}
    let projects = this.state.projects;
    {/* Then add the new project (that we passed in as a parameter for this function) to the variable list: */}
    projects.push(project);
    {/* Then reset the state in order to display the new updated list, because states are IMMUTABLE (have to be deleted and then re-created in order to be updated): */}
    this.setState({projects:projects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    {/* Checks which project's id matches the id of the delete button clicked, then adds this project to the 'index' variable: */}
    let index = projects.findIndex(x => x.id === id);
    {/* Then we delete this 'index' variable (that contains the project that we want to delete) from the project list: */}
    projects.splice(index, 1);
    {/* Then reset the state to display the new list: */}
    this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)}/>
        <hr />
        {/* Getting all these to-do's from an external API we linked earlier in the file: */}
        <ToDos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
