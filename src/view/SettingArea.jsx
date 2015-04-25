import React from "react"
import CheckBoxes from "./CheckBoxes.jsx"
import SettingEcmaFeatures from "./SettingEcmaFeatures.jsx"

export default class SettingArea extends React.Component{
  render(){
    const { flux, ecmaFeatures } = this.props
    return (
      <div className="settings-area">
        <SettingEcmaFeatures flux={flux} ecmaFeatures={ecmaFeatures} />
      </div>
    )
  }
}
