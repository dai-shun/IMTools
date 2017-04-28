/**
 * Created by daishun on 2017/4/21.
 */
import mqtt from "./mqtt";
import SockeIO from "./socket.io";
import store from "../store";
import {push} from "react-router-redux";
class Connection{
  constructor(){
    this.client=null;
  }
  getClient=()=>{
    console.log(" store.getState().form", store.getState().form);
    let login = store.getState().form.login;
    if(!login&&this.client==null){
      store.dispatch(push("/"));
      return;
    }

    if(this.client!=null){
      return this.client;
    }
    const {connectType} = login.values;
    if(connectType==0){
      this.client=new SockeIO();
      return this.client;
    }else{
      this.client=new mqtt();
      return this.client;
    }
  }
}
export default new Connection();
