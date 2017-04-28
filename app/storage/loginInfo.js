/**
 * Created by daishun on 2017/4/21.
 */
const LOGIN_INFO = "LOGIN_INFO";

const defaultValue =  {
  host:"im04.zhaopin.com",
  port:"80",
  token:"b8545aba6a732ddb03c8eda32ead153e",
  connectType:"0",
  deviceType:"1",
  remember:true
};

export function getLoginInfo(){
    var value = localStorage.getItem(LOGIN_INFO);
    if(!value){
      return defaultValue;
    }
    return JSON.parse(value);
}

export function setLoginInfo(info) {
  if(info){
    localStorage.setItem(LOGIN_INFO,JSON.stringify(info));
  }
}
