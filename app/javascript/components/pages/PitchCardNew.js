import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

class PitchCardNew extends Component {
  constructor(props){
  super(props)
  this.state = {
    newPitchCard: {
      company_name: "",
      company_email: "",
      logo: "",
      pitch: "",
      funding:"",
      industry:""
    },
    submitted:false
  }
}

handleChange = (e) => {
  let { newPitchCard } = this.state
  newPitchCard[e.target.name] = e.target.value
  this.setState({newPitchCard: newPitchCard})
}

handleSubmit = () => {
  this.props.createPitchCard({...this.state.newPitchCard, user_profile_id: this.props.current_user.id})
  this.setState({submitted:true})
}

    render() {
        return (
          <div className="login-page">
          <h2>Create a PitchCard!</h2>
            <div className="form">
              <div className="PitchCardNew">
              <Form>

                <FormGroup>
                  <Label for="company_name">Company Name</Label>
                  <Input
                    className="input"
                    name="company_name"
                    text="text"
                    onChange={this.handleChange}
                    value={this.state.newPitchCard.company_name}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="company_email">Company Email</Label>
                  <Input
                    className="input"
                    name="company_email"
                    text="text"
                    onChange={this.handleChange}
                    value={this.state.newPitchCard.company_email}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="logo">Company Logo</Label>
                  <Input
                    className="input"
                    name="logo"
                    text="url"
                    onChange={this.handleChange}
                    value={this.state.newPitchCard.logo}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="pitch">Company Pitch</Label>
                  <Input
                    className="input"
                    name="pitch"
                    text="text"
                    onChange={this.handleChange}
                    value={this.state.newPitchCard.pitch}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="funding">Funding Desired</Label>
                  <Input
                    className="input"
                    name="funding"
                    text="text"
                    onChange={this.handleChange}
                    value={this.state.newPitchCard.funding}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="industry">Industry</Label>
                  <Input
                    className="input"
                    name="industry"
                    text="text"
                    onChange={this.handleChange}
                    value={this.state.newPitchCard.industry}
                  />
                </FormGroup>

                <Button name="submit" className="button" onClick={this.handleSubmit}> 
                  Create New Pitch Card 
                </Button>
                    <p className="message">
                    <a href="/">
                      Go Back to Homepage
                    </a>
                    </p>
                {this.state.submitted && <Redirect to="/pitchcards" />}
              </Form>
            </div>
          </div>
        </div>
        )
    }
}
export default PitchCardNew
