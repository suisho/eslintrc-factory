import React from "react"
import FluxComponent from "flummox/component"
import Flux from '../flux'
import ResultArea from "./ResultArea.jsx"
import SettingArea from "./SettingArea.jsx"

export default class App extends React.Component{
  render(){
    const flux = new Flux()
    return (
      <FluxComponent flux={flux} connectToStores={
        {
          setting: store => ({
            rc: store.buildRc(),
            ecmaFeatures: store.state.ecmaFeatures
          })
        }
      }>
        <SettingArea />
        <ResultArea />
      </FluxComponent>
    )
  }
}

