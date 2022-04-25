import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class PitchCards extends Component {
  render() {
    return(
      <>

        <h4 id="header">Pitch Cards</h4>

        <br />

        <Col sm="6">
          {this.props.pitchCards && this.props.pitchCards.map(pitchCard => {
            return(
              <Card body key={pitchCard.id}>
              <NavLink to={`/pitchcardshow/${pitchCard.id}`}>Click to View Pitch Card</NavLink>
                <CardTitle>
                  <h4>{pitchCard.company_name}</h4>
                  <br />
                  <h5>{pitchCard.company_email}, {pitchCard.funding}, {pitchCard.industry}</h5>
                  <br />
                  <p>{pitchCard.pitch}</p>
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
