import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class PitchCards extends Component {
  render() {
    return(
      <>
        <div className="fullpagemargins">
          <div className="center-vertical-cards">
              <h2 id="header">Support a Startup!</h2>
              <div className="center-horizontal">
              <br />
              <Col>
                {this.props.pitchCards && this.props.pitchCards.map(pitchCard => {
                  return(
                    <Card body className="index-card" key={pitchCard.id}>
                      <CardImg className="index-image" src={pitchCard.logo} />
                        <CardTitle>
                          <div id="card-title">
                          <h2>{pitchCard.company_name}</h2>
                          <h3>{pitchCard.industry}</h3>
                          </div>
                        </CardTitle>
                        <h2>{pitchCard.funding}</h2><br />
                      <Link to={`/pitchcardshow/${pitchCard.id}`}>
                        <Button className="pitch-button">
                          View Pitch
                        </Button>
                      </Link>
                    </Card>
                  )
                })}
              </Col>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PitchCards
