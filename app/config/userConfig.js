/**
 * Created by daishun on 2017/4/9.
 */
import {storageKey,deviceType,connectType} from "../contants"

class userInfo {
  constructor(){
    var userinfo = localStorage.getItem(storageKey.USER_INFO);
    if(userinfo){
      sessionStorage.setItem(storageKey.USER_INFO,userinfo);
      this.userinfo=JSON.parse(userinfo);
    }
    this.getConnectType=this.getConnectType.bind(this);
    this.getDeviceType = this.getDeviceType.bind(this);
    this.getToken = this.getToken.bind(this);
    this.set=this.set.bind(this);
  }
  getToken(){
    if(this.userinfo){
      return this.userinfo.token;
    }
    return null;
  }
  getDeviceType(){
    if(this.userinfo){
      return this.userinfo.deviceType;
    }
    return null;
  }
  getConnectType() {
    if (this.userinfo) {
      return this.userinfo.connectType;
    }
    return null;
  }
  set(userinfo){
    this.userinfo=userinfo;
    localStorage.setItem(storageKey.USER_INFO,JSON.stringify(userinfo));
    sessionStorage.setItem(storageKey.USER_INFO,JSON.stringify(userinfo));
  }
}
export default new userInfo();
