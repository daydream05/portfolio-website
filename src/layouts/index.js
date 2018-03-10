import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Vince Parulan, Porfolio Website"
      meta={[
        { name: 'description', content: "This is my portfolio website and it's currently under construction" },
        { name: 'keywords', content: 'portfolio, projects' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
