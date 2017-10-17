import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../components/AppHeader'
import ReactGA from 'react-ga';

import './index.scss'


ReactGA.initialize("UA-25786448-4");

const TemplateWrapper = ({ children }) => (
  <div>
    <AppHeader />

    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 50,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
