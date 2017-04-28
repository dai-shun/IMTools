/**
 * Created by daishun on 2017/4/21.
 */
import {RECIEVE_MESSAGE} from "../actions/messages";

const defaultSate={
  dataSource:[]//0没连接过，1开始连接，2连接成功，3连接中断
}

export default function counter(state=defaultSate, action) {
  switch (action.type) {
    case RECIEVE_MESSAGE:

      return {...state,dataSource:[action.payload,...state.dataSource]};
    default:
      return state;
  }
}
