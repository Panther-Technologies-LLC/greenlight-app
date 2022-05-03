import React, { Component } from 'react'
import PantherTechLogo from '../assets/panther_tech_logo.png' // with import

class Footer extends Component {
  render() {
    return(
      <>
      {/* Footer Starts here */}
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6 id="about">About</h6>
                <div className="logo">
                <img src ={PantherTechLogo} />
                <p className="text-justify">Greenlight is an app which uses a model similar to tinder that provides investors and start-up companies a platform to connect. As an investor you are able to click or swipe through “pitch cards” created by Startup Company accounts. If you stumble across a project you’d like to possibly invest in, you can “greenlight” the project to connect with the company’s rep.
                </p>
                </div>
              </div>

              <div className="col-xs-6 col-md-3">
                <ul className="footer-links">
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="aboutus">About Us</a></li>
                  <li><a href="#">Credits</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Panther Technologies LLC.
                </p>
                <p>
                  All external content © their respective authors
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
              </div>
            </div>
          </div>
        </footer>
      {/* Footer ends here */}
      </>
    )
  }
}

export default Footer
