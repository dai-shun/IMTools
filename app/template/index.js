/**
 * Created by daishun on 2017/4/22.
 */
import faker from "faker";
import {recieveMessage} from "../actions/messages"
import store from "../store";
import moment from "moment";
export function addMessage(data) {
  if(!data){
    return;
  }
  var json = JSON.parse(data);
  var {type,unique} = json.header;
  console.log(json)
  if(type==1){
    type="request";
  }else if(type==2){
    type="response"
  }else if(type==3){
    type="out"
  }else if(type==4){
    type="in"
  }
  var message = {
    data,
    type,
    unique,
    time:moment().format('HH:mm:ss.SSS')
  };

  store.dispatch(recieveMessage(message))
}
String.prototype.replaceAll = function(s1,s2){
  return this.replace(new RegExp(s1,"gm"),s2);
}
export function analysis(data){
  for(var prop in data){
    let value = data[prop];
    switch (value){
      case "${uuid}":
        data[prop]=faker.random.uuid().replaceAll("-","");
        break;
      case "${word}":
        data[prop]=faker.random.word();
        break;
      case "${words}":
        data[prop]=faker.random.words();
        break;
      case "${time.now}":
        data[prop]=new Date().getTime();
        break;
      case "${time.past}":
        data[prop]=new Date(faker.date.past()).getTime();
        break;
      case "${time.future}":
        data[prop]=new Date(faker.date.future()).getTime();
        break;
      case "${number}":
        data[prop]=faker.random.number()
      default:
        break;
    }
    if(Object.prototype.toString.call(value)=="[object Object]"){
      data[prop]=analysis(value);
    }
  }
  return data;
}
