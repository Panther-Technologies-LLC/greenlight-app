import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardTitle, Col, CardImg, CardText } from 'reactstrap'

class PitchCardShow extends Component {


    render() {
      console.log(this.props.pitchCard)
        return (
            <>
              <h4 id="header">Pitch Card Show</h4>
              <Col sm="6">
                    <Card body key={this.props.pitchCard && this.props.pitchCard.id}>
                      <CardTitle>
                        <h4>{this.props.pitchCard && this.props.pitchCard.company_name}</h4>
                        <br />
                        <h5>{this.props.pitchCard && this.props.pitchCard.funding}, {this.props.pitchCard && this.props.pitchCard.industry}</h5>
                        <br />
                        <p>{this.props.pitchCard && this.props.pitchCard.pitch}</p>
                      </CardTitle>
                      <CardImg src={this.props.pitchCard && this.props.pitchCard.logo} />
                    </Card>
              </Col>

            </>
        )
    }
}
export default PitchCardShow
