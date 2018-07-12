import React, { Component } from 'react';
import{Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        myProject
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
