/**
 * Created by daishun on 2017/4/20.
 */
export const CHANGE_CONNECT_STATUS="CHANGE_CONNECT_STATUS",
  SET_USER_INFO="SET_USER_INFO";

export const changeConnectStatus=function (status) {
  return{
    type:CHANGE_CONNECT_STATUS,
    payload:status
  }
}

export const setUserInfo=function (info) {
  return{
    type:SET_USER_INFO,
    payload:info
  }
}
