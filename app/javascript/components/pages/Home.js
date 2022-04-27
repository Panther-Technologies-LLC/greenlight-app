import React, { Component } from 'react'

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
        <div className="full-page" id="home-page">
          <div className="center-horizontal">
            <div className="center-vertical">
              <h1>Funding of the Future</h1>
              <a href="/users/sign_up" className="nav-link">
                  Create An Account
              </a>
              <h5>Connecting Investors and Startups one Greenlight at a time</h5>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
