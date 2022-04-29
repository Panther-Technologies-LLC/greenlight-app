import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class GreenLightIndex extends Component {
    render() {
        console.log(this.props.greenLights[0] && this.props.greenLights[0].pitchcard)
        return (
            <>
                <div className="fullpagemargins">
                    <div className="center-vertical-cards">
                        <h2 id="header">Greenlight List</h2>
                        <div className="center-horizontal">
                            <br />
                            <Col>
                            {this.props.greenLights[0] && this.props.greenLights.map(greenlight => {
                                    return (
                                        <Card body className="index-card" key={greenlight.pitchcard.id}>
                                        <CardImg className="index-image" src={greenlight.pitchcard.logo} />
                                        <CardTitle>
                                            <div id="card-title">
                                                <h2>{greenlight.pitchcard.company_name}</h2>
                                                <h3>{greenlight.pitchcard.industry}</h3>
                                            </div>
                                        </CardTitle>
                                        <h2>{greenlight.pitchcard.funding}</h2><br />
                                        <Link to={`/pitchcardshow/${greenlight.pitchcard.id}`}>
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

export default GreenLightIndex
