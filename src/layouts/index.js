import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../components/AppHeader'
import ReactGA from 'react-ga';

import './index.scss'


ReactGA.initialize("UA-25786448-4");

const TemplateWrapper = ({ children }) => (
  <div>
    <AppHeader />

    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
