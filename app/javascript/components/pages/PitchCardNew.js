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
          <div className="PitchCardNew">
          <Form>
            <h2>Create a PitchCard!</h2>
            <FormGroup>
              <Label for="company_name">Company Name</Label>
              <Input
                name="company_name"
                text="text"
                onChange={this.handleChange}
                value={this.state.newPitchCard.company_name}
              />
            </FormGroup>

            <FormGroup>
              <Label for="company_email">Company Email</Label>
              <Input
                name="company_email"
                text="text"
                onChange={this.handleChange}
                value={this.state.newPitchCard.company_email}
              />
            </FormGroup>

            <FormGroup>
              <Label for="logo">Company Logo</Label>
              <Input
                name="logo"
                text="url"
                onChange={this.handleChange}
                value={this.state.newPitchCard.logo}
              />
            </FormGroup>

            <FormGroup>
              <Label for="pitch">Company Pitch</Label>
              <Input
                name="pitch"
                text="text"
                onChange={this.handleChange}
                value={this.state.newPitchCard.pitch}
              />
            </FormGroup>

            <FormGroup>
              <Label for="funding">Funding Desired</Label>
              <Input
                name="funding"
                text="text"
                onChange={this.handleChange}
                value={this.state.newPitchCard.funding}
              />
            </FormGroup>

            <FormGroup>
              <Label for="industry">Industry</Label>
              <Input
                name="industry"
                text="text"
                onChange={this.handleChange}
                value={this.state.newPitchCard.industry}
              />
            </FormGroup>

            <Button name="submit" onClick={this.handleSubmit}> Create New Pitch Card </Button>
            <p><NavLink to={`/`}><Button>Go Back to Homepage</Button></NavLink></p>
            {this.state.submitted && <Redirect to="/pitchcards" />}
          </Form>
        </div>
        )
    }
}
export default PitchCardNew
