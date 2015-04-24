import React from "react"
import FluxComponent from "flummox/component"
import Flux from '../flux'

export default class extends React.Component{
  render(){
    const flux = new Flux()
    return (
      <FluxComponent flux={flux} connectToStores={
        {
          setting: store => ({
            rc: store.state.settings,
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
export class ResultArea extends React.Component{
  render(){
    const {rc} = this.props
    return (
      <div className="result-area">
        <pre>
          <code>
            {JSON.stringify(rc, null, "  ")}
          </code>
        </pre>
      </div>
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
  generateEcmaValues(){
    return this.props.allEcmaFeatures.map((f) => {
      return {
        value: f,
        label: f,
        name: f
      }
    })
  }
  render(){
    var ecmaValues = this.generateEcmaValues()
    return (
      <div className="settings-area">
        <CheckBoxes onChange={this.change} data={ecmaValues}/>
      </div>
    )
  }
}

export class CheckBoxes extends React.Component{
  constructor(){
    super()
    this.change = this.change.bind(this)
  }
  change(e){
    return this.props.onChange({
      name: e.target.name,
      value: e.target.checked
    })
  }
  render(){
    const { data } = this.props
    const checkboxElm = data.map((item) => {
      return (
        <label key={item.label}>
          <li>
            <input type="checkbox"
              name={item.name}
              value={item.value} />
            {item.label}
          </li>
        </label>
      )
    })
    return (
      <form onChange={this.change} >
        <ul>
          {checkboxElm}
        </ul>
      </form>
    )
  }
}

