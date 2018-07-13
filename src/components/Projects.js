import React, { Component } from 'react';
import{Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    console.log(this.props)
    let ProjectItems;
    if(this.props.projects){
      ProjectItems=this.props.projects.map(project =>{
        //console.log(project);
        return(
          <ProjectItem key={project.title} project={project}/>
        )
      });
    }
    return (
      <div className="Projects">
        {ProjectItems}
      </div>
    );
  }
}

export default Projects;
