import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

class ContactForm extends Component {
  constructor(props){
  super(props)
  this.state = { 
    newEmail: {
      company_email: "",
      investor_email: "",
      subject: "",
      message: "",
    },
    submitted:false
  }
}

handleChange = (e) => {
  let { newEmail } = this.state
  newEmail[e.target.name] = e.target.value
  this.setState({newEmail: newEmail})
}

handleSubmit = () => {
//  insert code here
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
      console.log(this.state.newEmail)
        return (
          <div className="form-page-pitchcard">
          <h2>Contact Your Startup</h2>
            <div className="form-pitchcard">
              <div className="PitchCardNew">
              <Form>   
                <FormGroup>
                  <Label for="company_email">Company Email</Label>
                  <Input
                    className="input"
                    name="company_email"
                    text="text"
                    onChange={this.handleChange}
                    value={""}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label for="investor_email">Your Email</Label>
                  <Input
                    className="input"
                    name="investor_email"
                    text="text"
                    onChange={this.handleChange}
                    value={""}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input
                    className="input"
                    name="subject"
                    text="text"
                    onChange={this.handleChange}
                    value={""}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="message">Your Message</Label>
                  <Input
                    className="textarea"
                    name="message"
                    text="text"
                    type="textarea"
                    onChange={this.handleChange}
                    value={""}
                  />
                </FormGroup>

                <Button className="button btn btn-secondary" name="submit" onClick={this.handleSubmit}> Send Email </Button>
                <br />
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
export default ContactForm
