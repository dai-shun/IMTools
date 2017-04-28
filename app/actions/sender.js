/**
 * Created by daishun on 2017/4/21.
 */
export const CHANGE_SENDER_MODAL_VISIBLE="CHANGE_SENDER_MODAL_VISIBLE";

export const changeSenderModalVisible=function (visible) {
  return{
    type:CHANGE_SENDER_MODAL_VISIBLE,
    payload:visible
  }
}
