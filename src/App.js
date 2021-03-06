import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './components/Projects';
import './App.css';
import AddProject from './Components/Projects';
import{Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects:[
        {
        title:'Aidapp website',
        category:'web design'
        },
        {
        title:'social website',
        category:'Moile dev'
        },
        {
        title:'Slack website',
        category:'dev design'
        }
      ]
    }
  }
  componentWillMount(){
    this.setState({projects:[
      {
      title:'Aidapp website',
      category:'web design'
      },
      {
      title:'social website',
      category:'Moile dev'
      },
      {
      title:'Slack website',
      category:'dev design'
      }
    ]});
  }
  render() {
    return (
      <div className="App">
      <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              About
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>;
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome again to React</h1>
        </header>
        myapp
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
