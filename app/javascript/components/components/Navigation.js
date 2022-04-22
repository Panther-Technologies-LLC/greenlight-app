import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    const{
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(

      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </NavItem>
        {logged_in &&
          <NavItem>
            <a href={sign_out_route} className="nav-link">Logout</a>
            <NavLink to="/pitchcards" className="nav-link">Pitch Cards</NavLink>
          </NavItem>
        }
        {!logged_in &&
          <NavItem>
            <a href={new_user_route} className="nav-link">Create Account</a>
            <a href={sign_in_route} className="nav-link">Login</a>
          </NavItem>
        }
      </Nav>
    )
  }
}

export default Navigation
