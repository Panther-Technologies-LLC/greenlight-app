import React from "react"
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import UserProfileNew from './pages/UserProfileNew'
import PitchCardIndex from './pages/PitchCardIndex'
import PitchCardShow from './pages/PitchCardShow'
import PitchCardNew from './pages/PitchCardNew'
import PitchCardEdit from './pages/PitchCardEdit'

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pitchCards: [],
      userProfiles: []
    }
  }

  componentDidMount(){
    this.readPitchCard()
    this.readUserProfile()
  }

  readUserProfile = () => {
    fetch("/user_profiles")
    .then(response => response.json())
    .then(payload => this.setState({userProfiles: payload}))
    .catch(errors => console.log("UserProfile read errors:", errors))
  }

  createUserProfile = (newUserProfile) => {
    fetch("/user_profiles", {
    body: JSON.stringify(newUserProfile),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
  .then(response => response.json())
  .then(payload => this.readUserProfile())
  .catch(errors => console.log("UserProfile create errors:", errors))
}

  readPitchCard = () => {
    fetch("/pitch_cards")
    .then(response => response.json())
    .then(payload => this.setState({pitchCards: payload}))
    .catch(errors => console.log("PitchCard read errors:", errors))
  }

  createPitchCard = (newPitchCard) => {
    fetch("/pitch_cards", {
    body: JSON.stringify(newPitchCard),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
  .then(response => response.json())
  .then(payload => this.readPitchCard())
  .catch(errors => console.log("PitchCard create errors:", errors))
}

  updatePitchCard = (pitchCard, id) =>{
    fetch(`/pitch_cards/${id}`, {
      body: JSON.stringify(pitchCard),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readPitchCard())
    .catch(errors => console.log("PitchCard update errors:", errors))
  }

  deletePitchCard = (id) => {
    fetch(`/pitch_cards/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readPitchCard())
    .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    const{
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return(
      <>
        <Router>
          <Header {...this.props} />
            <Switch>
              <Route exact path="/" component={Home} {...this.props} />
              {logged_in &&
              <Route path="/pitchcards" render={(props) => <PitchCardIndex {...this.props} pitchCards={this.state.pitchCards} />} />
              }
              {logged_in &&
                <Route
                path="/pitchcardshow/:id"
                render={(props) => {
                  let id = props.match.params.id
                  let pitchCard = this.state.pitchCards.find(pitchCardObj => pitchCardObj.id === +id)
                  return <PitchCardShow {...this.props} deletePitchCard={this.deletePitchCard} pitchCard={pitchCard}/>
                }}
              />
              }

              {logged_in &&
                <Route path="/pitchcardnew"
                render={(props) => <PitchCardNew {...this.props} createPitchCard={this.createPitchCard} />}
                />
              }

              {logged_in &&
                <Route path="/pitchcardedit/:id" render = {(props) => {
                  let id = props.match.params.id
                  let pitchCard = this.state.pitchCards.find(pitchCardObj => pitchCardObj.id === +id)
                  return <PitchCardEdit {...this.props} updatePitchCard={this.updatePitchCard} pitchCard={pitchCard} />
                }}/>
              }

              {logged_in &&
                <Route path="/userprofilenew"
                render={(props) => <UserProfileNew {...this.props} createUserProfile={this.createUserProfile}  />}
                />
              }
            </Switch>
          <Footer {...this.props} />
        </Router>
      </>
    )
  }
}

export default App
