/**
 * Created by daishun on 2017/4/21.
 */
import React from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Row,Col} from "antd";
import MenuList from "../menuList";
import Sender from "../sender";
import Terminal from "../terminal";
import {ipcRenderer} from "electron";
import {setMenuList,setMenuFilter} from "../../actions/menu"
class Message extends React.Component{
  componentWillMount(){
    let data = localStorage.getItem("MENU_LIST");
    if(data)
    this.props.setMenuList(JSON.parse(data));
  }
  render(){
    return(
      <Row>
        <Col sm={4}>
         <MenuList {...this.props}/>
        </Col>
        <Col sm={20}>
          <Sender  {...this.props}></Sender>
          <Terminal {...this.props} />
        </Col>
      </Row>
    )
  }
}
function mapSateToProps(state){
  return {
    connectStatus:state.connect.status,
    userId:state.connect.userId,
    token:state.connect.token,
    deviceId:state.connect.deviceId,
    deviceType:state.connect.deviceType,
    connectType:state.connect.connectType,
    dataSource:state.messages.dataSource,
    menuList:state.menu.list,
    filter:state.menu.filter
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setMenuList:bindActionCreators(setMenuList,dispatch),
    setMenuFilter:bindActionCreators(setMenuFilter,dispatch),
  }
}
export default connect(mapSateToProps,mapDispatchToProps)(Message);
