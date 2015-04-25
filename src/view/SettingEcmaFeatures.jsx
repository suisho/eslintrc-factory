import React from "react"
import CheckBoxes from "./CheckBoxes.jsx"

export default class extends React.Component{
  constructor(){
    super()
    this.changeChild = this.changeChild.bind(this)
    this.checkAll = this.checkAll.bind(this)
    this.uncheckAll = this.uncheckAll.bind(this)
  }
  checkAll(){
    this.props.flux.getActions('setting').setEcmaFeaturesAll(true)
  }
  uncheckAll(){
    this.props.flux.getActions('setting').setEcmaFeaturesAll(false)
  }
  changeChild(content){
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
        <label>
          ecmaFeatures
          <button onClick={this.checkAll}>Check all</button>
          <button onClick={this.uncheckAll}>Uncheck all</button>
        </label>
        <CheckBoxes onChange={this.changeChild} data={ecmaValues}/>
      </div>
    )
  }
}
