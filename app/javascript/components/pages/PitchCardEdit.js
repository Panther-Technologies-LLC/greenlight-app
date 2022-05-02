import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

class PitchCardEdit extends Component {
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
  this.props.updatePitchCard(this.state.newPitchCard, this.props.pitchCard.id)
  this.setState({submitted:true})
}

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
          <div className="form-page-pitchcard">
          <h2>Update Your Pitch Card</h2>
            <div className="form-pitchcard">
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

                <FormGroup>
                  <Label for="pitch">Company Pitch</Label>
                  <Input
                    className="textarea"
                    name="pitch"
                    text="text"
                    type="textarea"
                    onChange={this.handleChange}
                    value={this.state.newPitchCard.pitch}
                  />
                </FormGroup>

                <Button className="button btn btn-secondary" name="submit" onClick={this.handleSubmit}> Update Pitch Card </Button>
                <br />
                <Link to={"/pitchcards"}>
                  <Button onClick={this.handleDelete}>
                    Delete this Pitch Card
                  </Button>
                </Link>
                <p className="message">
                    <a href="/">
                      Go Back to Homepage
                    </a>
                    </p>
                {this.state.submitted && <Redirect to={`/pitchcardshow/${this.props.pitchCard.id}`} />}
              </Form>
            </div>
          </div>
        </div>
        )
    }
}
export default PitchCardEdit
