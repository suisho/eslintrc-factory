import React from "react"
import FluxComponent from "flummox/component"
import Flux from '../flux'
import CheckBoxes from "./CheckBoxes.jsx"
import ResultArea from "./ResultArea.jsx"

export default class extends React.Component{
  render(){
    const flux = new Flux()
    return (
      <FluxComponent flux={flux} connectToStores={
        {
          setting: store => ({
            rc: store.buildRc(), //state.settings,
            ecmaFeatures: store.state.ecmaFeatures, //state.settings,
            allEcmaFeatures: store.getAllEcmaFeatures()
          })
        }
      }>
        <h1>.eslintrc Generator</h1>
        <Settings />
        <ResultArea/>
      </FluxComponent>
    )
  }
}

export class Settings extends React.Component{
  constructor(){
    super()
    this.change = this.change.bind(this)
  }
  change(content){
    return this.props.flux.getActions('setting').setEcmaFeatures(content)
  }
  generateEcmaValues(allKeys, values){
    return allKeys.map((f) => {
      return {
        checked: values.get(f),
        value: f,
        label: f,
        name: f
      }
    })
  }
  render(){
    const { allEcmaFeatures, ecmaFeatures } = this.props
    var ecmaValues = this.generateEcmaValues(allEcmaFeatures, ecmaFeatures)
    return (
      <div className="settings-area">
        <CheckBoxes onChange={this.change} data={ecmaValues}/>
      </div>
    )
  }
}
