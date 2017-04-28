/**
 * Created by daishun on 2017/4/9.
 */
export const SET_USER_INFO="SET_USER_INFO",
  CHANGE_USER_STATUS="CHANGE_USER_STATUS",
  CHANGE_CONNECT_STATUS="CHANGE_CONNECT_STATUS";

export const setUserInfo=function(info){
  return {
    type:SET_USER_INFO,
    payload:info
  }
}
export const changeUserStatus=function (status) {
  return {
    type:CHANGE_USER_STATUS,
    payload:status
  }
}
export const changeConnectStatus=function (status) {
  return {
    type:CHANGE_CONNECT_STATUS,
    payload:status
  }
}


