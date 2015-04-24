import { Store } from 'flummox'
import ecmaFeaturValues from "../vendor/ecma_features.js"
import { Map } from 'immutable'
export default class extends Store{
  constructor(flux){
    super()
    const action = flux.getActions('setting')
    this.register(action.setEcmaFeatures, this.updateEcma)
    this.state = {
      ecmaFeatures: Map()
    }
  }
  buildRc(){
    var settings = {} //this.state.settings
    settings.ecmaFeatures = this.state.ecmaFeatures.filter((feature) => {
      return feature === true
    }).toObject()
    return settings
  }
  getAllEcmaFeatures(){
    return ecmaFeaturValues
  }
  updateEcma({name, value}){
    const ecmaFeatures = this.state.ecmaFeatures
    this.setState({
      ecmaFeatures: ecmaFeatures.set(name, value)
    })
  }
}
