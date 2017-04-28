/**
 *
 * Created by daishun on 2017/4/13.
 */

export const SET_MENU_LIST="SET_MENU_LIST",
  SET_MENU_FILTER="SET_MENU_FILTER";

export const setMenuList=function (menu) {
  return{
    type:SET_MENU_LIST,
    payload:menu
  }
}

export const setMenuFilter=function (filter) {
  console.log(setMenuFilter,"filter")
  return{
    type:SET_MENU_FILTER,
    payload:filter
  }
}
