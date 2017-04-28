/**
 * Created by daishun on 2017/4/9.
 */
export const
  CHANGE_REQUEST_JSON="CHANGE_REQUEST_JSON",
  CHANGE_SAVE_STATUS="CHANGE_SAVE_STATUS",
  CHANGE_CONNECTOR_VISIBLE="CHANGE_CONNECTOR_VISIBLE"
  ;

export const changeRequestJson=function(json){
  return {
    type:CHANGE_REQUEST_JSON,
    payload:json
  }
}
export const changeSaveStatus=function (status) {
  return {
    type:CHANGE_SAVE_STATUS,
    payload:status
  }
}

export const changeConnectorVisible=function (visible) {
  return {
    type:CHANGE_CONNECTOR_VISIBLE,
    payload:visible
  }
}
