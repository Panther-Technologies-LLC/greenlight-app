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
    console.log(current_user_profile)
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
      current_user_profile
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
                    <NavLink to="/pitchcards" className="nav-link">Browse Startups</NavLink>
                  </NavItem>
                }
                {logged_in && (this.props.current_user_profile !== null) && (this.props.current_user_profile.is_investor == true) && 
                  <NavItem>
                    <NavLink to="/greenlightindex" className="nav-link">My Greenlights</NavLink>
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
                      {logged_in &&  (this.props.current_user_profile !== null) && (this.props.current_user_profile.is_investor == false) && 
                      <DropdownItem>
                        <NavLink to="/pitchcardnew" className="nav-link">Create Pitch Card</NavLink>
                      </DropdownItem>
                      }
                      {logged_in &&
                      <DropdownItem>
                        <a href={sign_out_route} className="nav-link">Logout</a>
                      </DropdownItem>
                      }
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
