/**
 * Created by daishun on 2017/4/21.
 */

import {CHANGE_SENDER_MODAL_VISIBLE} from "../actions/sender";

const defaultSate={
  modalVisible:false
}

export default function counter(state=defaultSate, action) {
  switch (action.type) {
    case CHANGE_SENDER_MODAL_VISIBLE:

      return {...state,modalVisible:action.payload};
    default:
      return state;
  }
}
