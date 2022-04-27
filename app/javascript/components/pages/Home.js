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
          <div class="center-horizontal">
            <div class="center-vertical">
              <h1>Funding of the Future</h1>
                <a href={new_user_route} className="nav-link">
                  <Button>
                    Create An Account
                  </Button>
                </a>
              <h4>Description of App here</h4>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
