import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardTitle, Col, CardImg, CardText, Button } from 'reactstrap'

class PitchCardShow extends Component {

  handleDelete = () => {
        if(window.confirm("Are you sure you want to delete this pitch card?") === true) {
          this.props.deletePitchCard(this.props.pitchCard.id)
          this.setState({ submitted: "true" })
        } else {
          this.setState({ submitted: "false" })
        }
      }

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
                    <NavLink to={`/pitchcardedit/${this.props.pitchCard && this.props.pitchCard.id}`}> <Button> Edit Pitch Card </Button></NavLink>
                    <NavLink to ={"/pitchcards"}> <Button onClick={this.handleDelete}> Delete this Pitch Card </Button> </NavLink>
              </Col>

            </>
        )
    }
}
export default PitchCardShow
