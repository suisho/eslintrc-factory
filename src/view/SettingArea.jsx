import React from "react"
import CheckBoxes from "./CheckBoxes.jsx"

export default class SettingArea extends React.Component{
  constructor(){
    super()
    this.change = this.change.bind(this)
  }
  change(content){
    return this.props.flux.getActions('setting').setEcmaFeatures(content)
  }
  generateEcmaValues(ecmaFeatures){
    return ecmaFeatures.map((value, key) => {
      return {
        value: key, label: key, name: key,
        checked: value
      }
    })
  }
  render(){
    const { ecmaFeatures } = this.props
    var ecmaValues = this.generateEcmaValues(ecmaFeatures)
    return (
      <div className="settings-area">
        <CheckBoxes onChange={this.change} data={ecmaValues}/>
      </div>
    )
  }
}
