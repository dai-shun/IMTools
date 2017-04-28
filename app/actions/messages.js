/**
 * Created by daishun on 2017/4/21.
 */
export const RECIEVE_MESSAGE="RECIEVE_MESSAGE";

export const recieveMessage=function (message) {
  return{
    type:RECIEVE_MESSAGE,
    payload:message
  }
}
