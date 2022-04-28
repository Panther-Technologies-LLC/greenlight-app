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
  NavItem }
  from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    const{
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <>
      <div>
        <Navbar
          color="light"
          expand="md"
          fixed="top"
          light
        >
          <NavbarBrand id="nav" href="/" >
            Greenlight
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              {logged_in &&
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Profile
                </DropdownToggle>
                <DropdownMenu end>
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
                    <a href={sign_out_route} className="nav-link">Logout</a>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
              }
              {logged_in &&
                <NavItem>
                  <NavLink to="/pitchcards" className="nav-link">Pitch Cards</NavLink>
                </NavItem>
              }
              {!logged_in &&
                <NavItem>
                  <a href={new_user_route} className="nav-link">Create Account</a>
                </NavItem>
              }
              {!logged_in &&
                <NavItem>
                  <a href={sign_in_route} className="nav-link">Login</a>
                </NavItem>
              }
            </Nav>
            <NavbarText>
              {logged_in && 
                <div>
                  Logged in as {current_user.email}
                </div> }
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
    )
  }
}

export default Header
