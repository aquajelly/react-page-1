import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id)
  }
  render() {
    return (
      <div className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </div>
    );
  }
}

{/*This is just a validation for the data type of the stuff in this file, e.g. this checks that the 'project' object is in fact an object: */}
ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
