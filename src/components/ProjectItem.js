import React, { Component } from 'react';
import{Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Projects">
       {this.props.project.title}:{this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
