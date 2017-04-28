/**
 * Created by daishun on 2017/4/23.
 */
import {SET_MENU_LIST,SET_MENU_FILTER} from "../actions/menu";

const defaultSate={
  list:{},//0没连接过，1开始连接，2连接成功，3连接中断
  filter:""
}

export default function counter(state=defaultSate, action) {
  switch (action.type) {
    case SET_MENU_LIST:
      return {...state,list:action.payload};
    case SET_MENU_FILTER:
      return {...state,filter:action.payload};
    default:
      return state;
  }
}
