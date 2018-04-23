import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App/App'

const Root = () => (
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
)

Root.propTypes = {

}

export default Root