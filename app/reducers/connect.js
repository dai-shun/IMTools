/**
 * Created by daishun on 2017/4/20.
 */
import {CHANGE_CONNECT_STATUS,SET_USER_INFO} from "../actions/connect";

const defaultSate={
  status:0,//0没连接过，1开始连接，2连接成功，3连接中断
  userId:"",
  token:"",
  deviceType:"",
  deviceId:"",
  connectType:"",
}

export default function counter(state=defaultSate, action) {
  switch (action.type) {
    case CHANGE_CONNECT_STATUS:
      return {...state,status:action.payload};
    case SET_USER_INFO:
      return {...state,...action.payload};
    default:
      return state;
  }
}
