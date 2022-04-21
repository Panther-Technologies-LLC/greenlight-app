import React from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import PitchCards from './pages/PitchCards'
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
    fetch("http://localhost:3000/pitchcards")
    .then(response => response.json())
    .then(payload => this.setState({pitchCards: payload}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }
  render() {
    return(
      <>
        <Router>
          <Header {...this.props} />
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pitchcards" render={(props) => <PitchCards pitchCards={this.state.pitchCards} />} />
            </Switch>
          <Footer {...this.props} />
        </Router>
      </>
    )
  }
}

export default App
