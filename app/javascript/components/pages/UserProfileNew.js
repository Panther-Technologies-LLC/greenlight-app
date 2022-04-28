import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

class UserProfileNew extends Component {
  constructor(props){
  super(props)
  this.state = {
    newUserProfile: {
      is_investor: false,
      first_name: "",
      last_name: ""
    },
    submitted:false
  }
}

handleChange = (e) => {
  let { newUserProfile } = this.state
  newUserProfile[e.target.name] = e.target.value
  this.setState({newUserProfile: newUserProfile})
  console.log(this.state.newUserProfile)
}

handleSubmit = () => {
  this.props.createUserProfile({...this.state.newUserProfile, user_id: this.props.current_user.id})
  this.setState({submitted:true})
}
    
    render() {
        return (
            <div className="login-page">
            <h2>User Profile</h2>
            <div className="form">
              <div className="UserProfileNew">
              <Form>
                <FormGroup>
                    <Label for="is_investor">
                        Investor or Startup?
                    </Label>
                    <Input
                        id="is_investor"
                        name="is_investor"
                        type="select"
                        onChange={this.handleChange}
                        value={this.state.newUserProfile.is_investor}
                    >
                        <option value={false}>
                            Startup Employee
                        </option>
                        <option value={true}>
                            Investor
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input
                    className="input"
                    name="first_name"
                    text="text"
                    onChange={this.handleChange}
                    value={this.state.newUserProfile.first_name}
                />
                </FormGroup>

                <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input
                    className="input"
                    name="last_name"
                    text="text"
                    onChange={this.handleChange}
                    value={this.state.newUserProfile.last_name}
                />
                </FormGroup>

                <Button name="submit" className="button" onClick={this.handleSubmit}> 
                  Save Your User Profile
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
export default UserProfileNew
