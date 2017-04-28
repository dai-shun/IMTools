/**
 * Created by daishun on 2017/4/22.
 */
import React from "react";

export default (props)=> {
  return(
    <div className="ui inverted segment">
      <div className="ui inverted form">
        <div className="field">
          <label>userId</label>
          <input type="text" disabled value={props.userId}/>
        </div>
        <div className="field">
          <label>deviceId</label>
          <input type="text" disabled value={props.deviceId}/>
        </div>
        <div className="field">
          <label>deviceType</label>
          <input  type="text" disabled value={["","ios","android","windows","mac"][props.deviceType]}/>
        </div>
        <div className="field">
          <label>connectType</label>
          <input  type="text" disabled value={["socket.io","mqtt"][props.connectType]}/>
        </div>
        <div className="field">
          <label>status</label>
          <input  type="text" disabled style={{color:props.connectStatus==2?"green":"red"}} value={props.connectStatus==2?"connected!":"disconnected!"}/>
        </div>
      </div>
    </div>
  )
}


