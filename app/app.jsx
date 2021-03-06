
import React from 'react'
import routes from './routes'
import Router from 'react-router'

if (__DEV__) {
  var Perf = require('react/lib/ReactPerf')
  var a11y = require('react-a11y')

  // Export React and Performance Utility for debugging
  window.React = React
  window.Perf = Perf
  a11y()
}

Router.run(routes, Router.HistoryLocation, function renderApp(Handler) {
  React.render(<Handler/>, document.getElementById('app'))
})
