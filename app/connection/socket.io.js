/**
 * Created by daishun on 2017/4/21.
 */
import store from "../store";
// import io from "./lib/socket.io";
import {changeConnectStatus} from "../actions/connect";
import {push} from "react-router-redux";
import {addMessage} from "../template"

export default class Client{
  constructor(){
    const {host,port,token,deviceType} =  store.getState().form.login.values;
    const {userId,deviceId} = store.getState().connect;
    // const path=`http://${host}:${port}?token=${token}&device_id=${deviceId}&device_type=${deviceType}`;
    let path=""
    if(port){
      path=`http://${host}:${port}?token=${token}&device_id=${deviceId}&device_type=${deviceType}`;
    }else{
      path=`http://${host}?token=${token}&device_id=${deviceId}&device_type=${deviceType}`;
    }


    console.log("使用socket.io连接。。。连接路径：",userId,deviceId,path);
    this.subscriblers=[];
    this.socket=io.connect(path,{
      // reconnectionAttempts:0//不重试
    });
    this.socket.on('connect',()=> {
      store.dispatch(changeConnectStatus(2));
      store.dispatch(push("/message"));
      console.log("client connected")
    });
    this.socket.on('disconnect',()=> {
      store.dispatch(changeConnectStatus(3))
      console.log("client disconnect")
    });
    this.socket.on('connect_error',(err)=> {
      console.log("connect_error")
      console.dir(err);
    });
    this.socket.on('connect_timeout',(err)=> {
      console.log("connect_timeout",err);
    });
    this.socket.on('reconnect',(times)=> {
      console.log("reconnect",times);
    });
    this.socket.on('reconnect_error',(err)=> {
      console.log("reconnect_error",err);
    });
    this.socket.on('response',(data, ackServerCallback, arg1)=> {
      console.log("socket.io response",data);
      if (ackServerCallback) {
        ackServerCallback('server message was delivered to client!');
      }
      addMessage(JSON.stringify(data))
      this.subscriblers.map((fn)=>{
        fn(data);
      })

    });
    this.socket.on('out',(data)=> {
      console.log("socket.io out",data);
      addMessage(JSON.stringify(data))
      this.subscriblers.map((fn)=>{
        fn(data);
      })
    });
  }
  publish=(message)=>{
    this.socket.emit('publish', message, function(arg1, arg2) {
      console.log("ack from server",arg1, arg2)
    });
  }
  subscrible=(fn)=>{
    this.subscriblers.push(fn);
  }
}

