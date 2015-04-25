import React from "react"
export class ListCheckItem extends React.Component{
  render(){
    const {item, onChange} = this.props
    return (
      <label key={item.label}>
        <li>
          <input type="checkbox"
            onChange={onChange}
            checked={item.checked}
            name={item.name}
            value={item.value} />
          {item.label}
        </li>
      </label>
    )
  }
}
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
  generateLiElm(item){
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
  }
  render(){
    const { data } = this.props
    const checkboxElm = data.map((item) => {
      return <ListCheckItem key={item.name} item={item} onChange={this.change} />
    })
    return (
      <ul>
        {checkboxElm}
      </ul>
    )
  }
}

