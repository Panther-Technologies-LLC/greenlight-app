import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
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
    console.log(logged_in)
    console.log(current_user)
    return(
      <>
        <h3>Greenlight App</h3>
        <Nav>
        {!logged_in &&
          <NavItem>
            <a href={new_user_route} className="nav-link">Create Account</a>
            <a href={sign_in_route} className="nav-link">Login</a>
          </NavItem>
        }
        </Nav>
      </>
    )
  }
}

export default Header
