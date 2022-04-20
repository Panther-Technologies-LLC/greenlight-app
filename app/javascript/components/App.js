import React from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return(
      <>
        <Router>
          <Header {...this.props} />
          <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          <Footer {...this.props} />
        </Router>
      </>
    )
  }
}

export default App
