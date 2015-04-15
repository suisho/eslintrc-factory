var React = require("react")

export default class EslintFactiory extends React.Component{
  render(){
    return <ResultArea></ResultArea>
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