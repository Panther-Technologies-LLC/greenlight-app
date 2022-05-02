import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Nav,
  NavItem,
  Button
}
  from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
        <div>
          <Navbar
            color="light"
            expand="md"
            fixed="top"
            light
          >
            <NavbarBrand id="nav" href="/" >
              <i className="fa-solid fa-lightbulb green"></i> Greenlight
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse navbar isOpen={this.state.isOpen}>
              <Nav
                className="me-auto vert-center"
                navbar
              >
                {logged_in &&
                  <NavItem>
                    <NavLink to="/pitchcards" className="nav-link">Pitch Cards</NavLink>
                  </NavItem>
                }
              </Nav>
              <Nav navbar>
                <NavbarText>
                  {logged_in &&
                    <div>
                      Signed in as {current_user.email}
                    </div>}
                </NavbarText>
                {logged_in &&
                  <UncontrolledDropdown
                    inNavbar
                    nav
                  >
                    <DropdownToggle
                      caret
                      nav
                    >
                      <i className="fa-solid fa-user green nav-icon"></i>
                    </DropdownToggle>
                    <DropdownMenu
                      end
                      className="dropdown-right"
                    >
                      <DropdownItem>
                        <NavLink to="/userprofilenew" className="nav-link">Create Your Profile</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink to="/pitchcardnew" className="nav-link">Create Pitch Card</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="/greenlightindex" className="nav-link">Greenlight List</a>
                      </DropdownItem>
                      <DropdownItem>
                      {logged_in &&
                        <a href={sign_out_route} className="nav-link">Logout</a>
                      }
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                }
                {!logged_in &&
                  <NavItem>
                    <a href={new_user_route} className="signin-btn btn btn-secondary">Sign-Up</a>
                  </NavItem>
                }
                {!logged_in &&
                  <NavItem>
                    <a href={sign_in_route} className="signin-btn btn btn-secondary">Login</a>
                  </NavItem>
                }
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </>
    )
  }
}

export default Header
