import React from "react"
import yaml from 'js-yaml'

export class ResultArea extends React.Component{
  constructor(){
    super()
    this.state = {renderMode: "yaml"}
  }
  renderRc(){
    const {rc} = this.props
    switch(this.state.renderMode){
      case "yaml":
        return yaml.safeDump(rc)
      case "json":
      default:
        return JSON.stringify(rc, null, "  ")
    }
  }
  render(){
    var rc = this.renderRc()
    return (
      <div className="result-area">
        <pre>
          <code>
            {rc}
          </code>
        </pre>
      </div>
    )
  }
}
