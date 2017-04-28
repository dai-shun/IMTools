/**
 * Created by daishun on 2017/4/9.
 */
import {storageKey,deviceType,connectType} from "../contants"
class GlobalConfig {
  constructor(){
    var globalConfig = localStorage.getItem(storageKey.GLOBAL_CONFIG);
    if(globalConfig){
      this.config=JSON.parse(globalConfig);
    }
    this.getSocketConfig=this.getSocketConfig.bind(this);
    this.getMqttConfig = this.getMqttConfig.bind(this);
    this.getRedisConfig = this.getRedisConfig.bind(this);
    this.set=this.set.bind(this);
  }
  getSocketConfig(){
    if(this.config){
      return this.config.socketio;
    }
    return null;
  }
  getMqttConfig(){
    if(this.config){
      return this.config.mqtt;
    }
    return null;
  }
  getRedisConfig() {
    if (this.config) {
      return this.config.redis;
    }
    return null;
  }
  set(globalConfig){
    this.config=globalConfig;
    localStorage.setItem(storageKey.GLOBAL_CONFIG,JSON.stringify(globalConfig));
  }
}
export default new GlobalConfig();
