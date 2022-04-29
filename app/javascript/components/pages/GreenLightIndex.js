import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class GreenLightIndex extends Component {
    render() {
        return (
            <>
                <div className="white-bg">
                    <div className="fullpagemargins">
                        <h4 id="header">Greenlight List</h4>
                        {console.log('this.state.greenlight_list')}
                        {console.log(this.state.greenlight_list)}
                        {console.log('this.state.greenlight_list')}
                        <Col sm="6">
                            {this.props.greenLights && this.greenlight_list.map(v => {
                                return (
                                    <Card body key={v.id}>
                                        <CardTitle>
                                            <h4>{v.company_name}</h4>
                                            <br />
                                            <h5>{v.company_email}, {v.funding}, {v.industry}</h5>
                                            <br />
                                        </CardTitle>
                                        <CardImg src={v.logo} />
                                        <NavLink to={"/greenlightindex"}>
                                            <Button onClick={() => this.handleDelete(`${v.id}`)}>
                                                Delete this Greenlight
                                            </Button>
                                        </NavLink>
                                    </Card>
                                )
                            })}
                        </Col>
                    </div>
                </div>
            </>
        )
    }
}

export default GreenLightIndex
