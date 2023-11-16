import React, { Component } from 'react'
import { InputAccessoryView, Text, View } from 'react-native'
import Navigations from './routes/HomeStack'

export class App extends Component {
  render() {
    return (
      <Navigations/>
    )
  }
}

export default App
