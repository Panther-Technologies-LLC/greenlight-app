import React, { Component } from 'react'
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
      <div class="full-page">
        <div class="center-center">
          <h1>Funding of the Future</h1>
            <br />
            <a href={new_user_route} className="nav-link">
              <Button>
                Create An Account
              </Button>
            </a>
            <br />
          <h4>Description of App here</h4>
        </div>
      </div>
      </>
    )
  }
}

export default Home
