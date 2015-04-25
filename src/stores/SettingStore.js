import { Store } from 'flummox'
import features from "espree/lib/features"
import eslintDefault from 'eslint/conf/eslint.json'
import { Map } from 'immutable'

export default class extends Store{
  constructor(flux){
    super()
    const action = flux.getActions('setting')
    this.register(action.setEcmaFeatures, this.updateEcma)
    this.state = {
      ecmaFeatures: this.buildInitialEcmaFeatures()
    }
  }
  buildInitialEcmaFeatures(){
    var ecmaFeatures = Object.keys(features)
    return Map(ecmaFeatures.map((f) => {
      return [f, true]
    }))
  }
  buildRc(){
    var settings = {}
    // ecmaFeatures
    settings.ecmaFeatures = this.state.ecmaFeatures.filter((feature) => {
      return feature === true
    }).toObject()

    return settings
  }
  updateEcma({name, value}){
    const ecmaFeatures = this.state.ecmaFeatures
    this.setState({
      ecmaFeatures: ecmaFeatures.set(name, value)
    })
  }
}
