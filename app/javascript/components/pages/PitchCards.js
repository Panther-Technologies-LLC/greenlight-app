import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardText } from 'reactstrap'

class PitchCards extends Component {
  render() {
    return(
      <>
        <h4>Pitch Cards</h4>
        <br />
        <Col sm="6">
          {this.props.pitchCards.map(pitchCard => {
            return(
              <Card body key={pitchCard.id}>
                <CardTitle>
                  <h4>{pitchCard.company_name}</h4>
                  <br />
                  <h5>{pitchCard.company_email}, {pitchCard.funding}, {pitchCard.industry}</h5>
                  <br />
                  <h5>{pitchCard.pitch}</h5>
                </CardTitle>
                <CardImg src={pitchCard.logo} />
              </Card>
            )
          })}
        </Col>
      </>
    )
  }
}

export default PitchCards
