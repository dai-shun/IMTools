/**
 * Created by daishun on 2017/4/22.
 */
const {ipcMain} = require('electron');
const mqtt = require("mqtt");
let client = null;
var topic=null;
ipcMain.on('mqtt-connect-message', (event, {host,port,token,deviceType,userId,deviceId}) => {
  console.log('mqtt-connect-message',{host,port,token,deviceType,userId,deviceId})
  topic=userId+"";
  client = mqtt.connect(`mqtt://${host}:${port}`,{
    keepalive:5,
    clientId:deviceId,
    username:deviceType,
    password:token,
    connectTimeout:3000,
    protocolVersion:3
  });
  client.subscribe(topic);
  client.on('connect', function () {
    console.log("mqtt connect")
    event.sender.send('mqtt-connect-reply', 'connect')
  });
  client.on("reconnect",function (err) {
    console.log("reconnect...")
    event.sender.send('mqtt-reconnect-reply', err)
  })
  client.on("error",function (err) {
    console.log("mqtt error",err)
    event.sender.send('mqtt-error-reply', err)
  })
  client.on("close",function (err) {
    console.log("mqtt colse",err)
    event.sender.send('mqtt-colse-reply',err)
  })
  client.on("offline",function (err) {
    console.log("mqtt offline",err)
    event.sender.send('mqtt-offline-reply',err)
  })
  client.on('message', function (topic, payload) {
    console.log("message",[topic, payload].join(": "))
    event.sender.send('mqtt-response-reply',payload.toString())
  });
})
ipcMain.on('mqtt-publish-message', (event,message) => {
  console.log('mqtt-publish-message',topic,message)
  client.publish(topic,JSON.stringify(message))
})





