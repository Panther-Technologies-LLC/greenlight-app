import React from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import PitchCardIndex from './pages/PitchCardIndex'
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
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              {logged_in &&
              <Route path="/pitchcards" render={(props) => <PitchCardIndex {...this.props} pitchCards={this.state.pitchCards} />} />
              }
            </Switch>
          <Footer {...this.props} />
        </Router>
      </>
    )
  }
}

export default App
