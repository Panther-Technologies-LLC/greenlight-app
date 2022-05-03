import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="fullpagemargins-about-us">
          <h1>About Us</h1>
          <meta
            name="viewport-about-us"
            content="width=device-width, initial-scale=1"
          ></meta>
          <div className="flex-about-us">
            <div className="card-about-us">
              <img className="image-about-us" src="https://media-exp1.licdn.com/dms/image/D5635AQGrMovaUGy56w/profile-framedphoto-shrink_400_400/0/1648594790736?e=2147483647&v=beta&t=WVfnhVAjvBTaPtIcJSojm3mXYtmOxzJ-jW0lRd1R0dw" />
              <div className="container-about-us">
                <h2>Nate</h2>
                <p className="title-about-us">Product/Project Manager</p>
                <p>
                  Has a strong eye for innovative design and a keen
                  understanding of techniques geared toward optimum user
                  experience.
                </p>
                <p>ndbethea@outlook.com</p>
                <p>
                <br />
                <br />
                  <button className="button-about-us">Contact</button>
                </p>
              </div>
            </div>
            <div className="card-about-us">
              <img className="image-about-us" src="https://media-exp1.licdn.com/dms/image/D5635AQF373SMl2ZH4Q/profile-framedphoto-shrink_400_400/0/1648747932873?e=2147483647&v=beta&t=erRdL0l-Er_DtbIc1Gzf1c8-TTgrn4N-WqZU_NerxeI" />
              <div className="container-about-us">
                <h2>Jennice</h2>
                <p className="title-about-us">Design Lead</p>
                <p>
                  Flexible and multi-skilled web developer and passionate
                  creator with 10+ years of game industry experience across
                  multiple disciplines.
                </p>
                <p>jennicelodi@gmail.com</p>
                <br />
                <p>
                  <button className="button-about-us">Contact</button>
                </p>
              </div>
            </div>
            <div className="card-about-us">
              <img className="image-about-us" src="https://media-exp1.licdn.com/dms/image/C4D03AQFcEXmABwGDYA/profile-displayphoto-shrink_400_400/0/1648692082160?e=1656547200&v=beta&t=7MHcTh99goilw0h5U0f4jWquDpl9_qHVGnsxqB_LBzg" />
              <div className="container-about-us">
                <h2>Athen</h2>
                <p className="title-about-us">Tech Lead/Anchor</p>
                <p>
                  A web developer based in Southern California with a
                  passion for creative problem-solving and innovative
                  technology.
                </p>
                <p>athenjpark@gmail.com</p>
                <br />
                <br />
                <p>
                  <button className="button-about-us">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
