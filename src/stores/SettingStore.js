import { Store } from 'flummox'
import espreeFeatures from "espree/lib/features"
import eslintDefault from 'eslint/conf/eslint.json'
import { OrderedMap } from 'immutable'

export default class extends Store{
  constructor(flux){
    super()
    const action = flux.getActions('setting')
    this.register(action.setEcmaFeatures, this.updateEcma)
    this.register(action.setEcmaFeaturesAll, this.setEcmaFeaturesAll)
    this.state = {
      env: OrderedMap(eslintDefault.env),
      ecmaFeatures: this.buildInitialEcmaFeatures()
    }
  }
  setEcmaFeaturesAll(value){
    this.setState({
      ecmaFeatures: this.state.ecmaFeatures.map( () => value)
    })
  }
  buildInitialEcmaFeatures(){
    var ecmaFeatures = Object.keys(espreeFeatures)
    return OrderedMap(ecmaFeatures.map((f) => {
      return [f, true]
    }))
  }
  buildRc(){
    var settings = {}
    // ecmaFeatures
    settings.ecmaFeatures = this.state.ecmaFeatures.filter((feature) => {
      return feature === true
    }).toObject()
    //env
    settings.env = this.state.env.filter((feature) => {
      return feature === true
    }).toObject()

    return settings
  }
  updateEcma({name, value}){
    this.setState({
      ecmaFeatures: this.state.ecmaFeatures.set(name, value)
    })
  }
  updateEnv({name, value}){
    this.setState({
      env: this.state.env.set(name, value)
    })
  }
}
