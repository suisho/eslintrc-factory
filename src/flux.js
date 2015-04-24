import { Flummox, Actions } from "flummox"
import SettingStore from "./stores/SettingStore"

const SettingAction = {
  setEcmaFeatures(content){
    return content
  }
}

export default class extends Flummox {
  constructor(){
    super()
    this.createActions('setting', SettingAction);
    this.createStore('setting', SettingStore, this)
  }
}
