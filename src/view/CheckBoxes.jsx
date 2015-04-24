import React from "react"

export default class extends React.Component{
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
              onChange={this.change}
              checked={item.checked}
              name={item.name}
              value={item.value} />
            {item.label}
          </li>
        </label>
      )
    })
    return (
      <ul>
        {checkboxElm}
      </ul>
    )
  }
}

