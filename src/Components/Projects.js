import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if (this.props.projects) {
      {/* We need to map through projectItems as it is an array: */}
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete = {this.deleteProject.bind(this)} key = {project.title} project = {project} />
        )
      });
    }
    return (
      <div className="Projects">
        <h3>Project List:</h3>
        {projectItems}
      </div>
    );
  }
}

{/*This is just a validation for the data type of the stuff in this file, e.g. this checks that the 'onDelete' function is in fact a function: */}
Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;
