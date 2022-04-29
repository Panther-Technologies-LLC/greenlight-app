import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Col, CardImg, CardText, Button } from 'reactstrap'

class PitchCardShow extends Component {

  handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this pitch card?") === true) {
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
        <div className="fullpagemargins">
          <div className="center-vertical-cards">
            <Col>
                  <Card body className="index-card-show" key={this.props.pitchCard && this.props.pitchCard.id}>
                    <CardImg className="index-image-show" src={this.props.pitchCard && this.props.pitchCard.logo}  />
                      <CardTitle>
                        <div id="card-title">
                        <h2>{this.props.pitchCard && this.props.pitchCard.company_name}</h2>
                        <h3>{this.props.pitchCard && this.props.pitchCard.industry}</h3>
                        </div>
                      </CardTitle>
                      <h4>Funding Needed</h4>
                      <h2>{this.props.pitchCard && this.props.pitchCard.funding}</h2><br />
                      <CardText className="card-text">
                        {this.props.pitchCard && this.props.pitchCard.pitch}
                      </CardText>
                    <br />
                    <Link to={`/pitchcardedit/${this.props.pitchCard && this.props.pitchCard.id}`}>
                      <Button className="pitch-button">
                        Edit Pitch Card
                      </Button>
                    </Link>
                    <br/>
                    <Link to={"/pitchcards"}>
                      <Button onClick={this.handleDelete}>
                        Delete this Pitch Card
                      </Button>
                    </Link>
                  </Card>
            </Col>
          </div>
        </div>
      </>
        )
  }
}
export default PitchCardShow
