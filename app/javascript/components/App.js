import React from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render() {
    return(
      <>
        <Header {...this.props} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </Router>
      <Footer {...this.props} />
      </>
    )
  }
}

export default App
