import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// react-router import
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

class PitchCardNew extends Component {
  constructor(props){
  super(props)
  this.state = {
    newPitchCard: {
      company_email: "",
      company_name: "",
      logo: "",
      pitch: "",
      funding:"",
      industry:""
    },
    submitted:false
  }
}

handleChange = (e) => {
  // destructuring form out of state
  let { newPitchCard } = this.state
  newPitchCard[e.target.name] = e.target.value
  // setting state to the updated form content
  this.setState({newPitchCard: newPitchCard})
}

handleSubmit = () => {
  this.props.createPitchCard(this.state.newPitchCard)
  this.setState({submitted:true})
}

    render() {
        return (
          <div className="PitchCardNew">
          <Form>
            <h2>Create a PitchCard!</h2>
            <FormGroup>
              <Label for="name">Company Name</Label>
              <Input
                name="name"
                text="text"
                onChange={this.handleChange}
                value={this.state.newPitchCard.company_name}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Company Email</Label>
              <Input
                name="email"
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
              <Label for="image">Picture of Cat</Label>
              <Input
                name="image"
                placeholder="What does your cat look like?"
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
            <Button name="submit" onClick={this.handleSubmit}> Create New Profile! </Button>
            <p><NavLink to={`/`}><Button>Go Back to Homepage</Button></NavLink></p>
            {this.state.submitted && <Redirect to="/catindex" />}
          </Form>
        </div>
        )
    }
}
export default CatNew
