import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
class Home extends Component {
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
        <div id="home-page">
          <div className="center-horizontal">
            <div className="center-vertical">
              <h1>Funding of the Future</h1>
              <Link to="/users/sign_up">
                <Button className="custom-btn">
                  Sign Up
                </Button>
              </Link>
              <h5>Connecting Investors and Startups one Greenlight at a time</h5>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
