import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return(
      <>
      {/* Footer Starts here */}
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">Scanfcode.com <i>FUNDING OF THE FUTURE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Credits</a></li>
                  <li><a href="#">Privacy Policy</a></li>
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
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                </ul>
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
