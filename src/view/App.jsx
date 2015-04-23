import React from "react"

export default class extends React.Component{
  render(){
    return (
      <div>
        <h1>.eslintrc Generator</h1>
        <ResultArea></ResultArea>
      </div>
    )
  }
}
export class ResultArea extends React.Component{
  render(){
    return (
      <div>
        <textarea></textarea>
      </div>
    )
  }
}

export class CheckBoxes extends React.Component{
  render(){
    const { data } = this.props
    const checkboxElm = data.map((item) => {
      return (
        <label key={item}>
          <input type="checkbox" value={item.value}/>
          {item.label}
        </label>
      )
    })
    return <form> {checkboxElm}</form>
  }
}
