/**
 * Created by daishun on 2017/4/10.
 */
import {MessageTable} from "../database"
export const
  CHANGE_RESPONSE_JSON="CHANGE_RESPONSE_JSON",
  CHANGE_MESSAGE_TABLE="CHANGE_RESPONSE_JSON",
  PUSH_MESSAGE="PUSH_MESSAGE"
  ;

export const changeResponseJson=function(json){
  return {
    type:CHANGE_RESPONSE_JSON,
    payload:json
  }
}
export const changeMessageTable=function(arr){
  return {
    type:CHANGE_MESSAGE_TABLE,
    payload:arr
  }
}
export const pushMessage=function(data){
  var data2=JSON.parse(JSON.stringify(data));
  const {type,group,signall,unique} = data2.header;
  return {
    type:PUSH_MESSAGE,
    payload:{
      type,group,signall,unique,
      createTime:new Date(),
      content:data2
    }
  }
}

export const queryMessageTable=function () {
  return function (dispatch,getState) {
    MessageTable.query(function (arr=[]) {
      dispatch(changeMessageTable(arr));
    })
  }
}


