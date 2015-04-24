import { Store } from 'flummox'
import ecmaFeatures from "../vendor/ecma_features.js"

export default class extends Store{
  constructor(flux){
    super()
    const action = flux.getActions('setting')
    this.register(action.setEcmaFeatures, this.updateEcma)
    this.state = {
      settings: {
        ecmaFeatures: {}
      }
    }
  }
  getAllEcmaFeatures(){
    return ecmaFeatures
  }
  updateEcma({name, value}){
    var setting = this.state.settings
    setting.ecmaFeatures[name] = value
    this.setState(setting)
  }
}
