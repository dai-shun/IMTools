/**
 * Created by daishun on 2017/4/21.
 */
const {ipcRenderer} = require('electron');
import store from "../store";
import {changeConnectStatus} from "../actions/connect";
import {push} from "react-router-redux";
import {addMessage} from "../template"

// export const MQTT_CONNECT_MESSAGE="mqtt-connect-message",
//   MQTT_CONNECT_REPLY="mqtt-connect-reply",
//   MQTT_DISCONNECT_REPLY="mqtt-disconnect-reply",
//   MQTT_RESPONSE_REPLY="mqtt-response-reply",
//   MQTT_PUBLISH_MESSAGE="mqtt-publish-message";

export default class Client{
  constructor(){
    console.log("使用mqtt连接。。。");
    const {host,port,token,deviceType} =  store.getState().form.login.values;
    const {userId,deviceId} = store.getState().connect;
    ipcRenderer.on('mqtt-connect-reply', (event, arg) => {
      console.log("mqtt-connect-reply",event,arg)
      store.dispatch(changeConnectStatus(2));
      store.dispatch(push("/message"));
    })
    ipcRenderer.send('mqtt-connect-message',{host,port,token,deviceType,deviceId,userId})
    ipcRenderer.on('mqtt-colse-reply', (event, err) => {
      console.error('mqtt-colse-reply',err)
      store.dispatch(changeConnectStatus(3));
    })
    ipcRenderer.on('mqtt-response-reply', (event, data) => {
      console.log("mqtt-response-reply",data)
      addMessage(data);
    })
    ipcRenderer.on('mqtt-reconnect-reply', (event, err) => {
      console.log("mqtt-response-reply",err)
    })
    ipcRenderer.on('mqtt-reconnect-reply', (event, err) => {
      console.log("mqtt-reconnect-reply",err)
    })
    ipcRenderer.on('mqtt-offline-reply', (event, err) => {
      console.log("mqtt-offline-reply",err)
    })
  }
  publish=(message)=>{
    ipcRenderer.send('mqtt-publish-message',message);
  }
}
