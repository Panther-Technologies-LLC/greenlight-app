import React from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import PitchCardIndex from './pages/PitchCardIndex'
import PitchCardShow from './pages/PitchCardShow'
import PitchCardNew from './pages/PitchCardNew'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pitchCards: []
    }
  }

  componentDidMount(){
    this.readPitchCard()
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
  render() {
    const{
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    console.log(current_user)
    return(
      <>
        <Router>
          <Header />
          <Navigation {...this.props}/>
            <Switch>
              <Route exact path="/" component={Home} />
              {logged_in &&
              <Route path="/pitchcards" render={(props) => <PitchCardIndex {...this.props} pitchCards={this.state.pitchCards} />} />
              }
              {logged_in &&
                <Route
                path="/pitchcardshow/:id"
                render={(props) => {
                  let id = props.match.params.id
                  let pitchCard = this.state.pitchCards.find(pitchCardObj => pitchCardObj.id === +id)
                  return <PitchCardShow {...this.props} pitchCard={pitchCard}/>
                }}
              />
              }

              {logged_in &&
                <Route path="/pitchcardnew"
                render={(props) => <PitchCardNew {...this.props} createPitchCard={this.createPitchCard} />}
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
