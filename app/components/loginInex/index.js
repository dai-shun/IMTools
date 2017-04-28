/**
 * Created by daishun on 2017/4/20.
 */
import React from "react";
import LoginForm from "../loginForm";
import {Row,message} from "antd";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import connection from "../../connection";
import {setLoginInfo} from "../../storage/loginInfo";
import {setUserInfo} from "../../actions/connect";
import faker from "faker";
class LoginIndex extends React.Component{
  handleSubmit=(values={})=>{
    const {token,host,port} = values;
    if(!token){
      message.error("please input your token")
      return;
    }
    if(!host){
      message.error("please input server host")
      return;
    }
    // if(!port){
    //   message.error("please input server port")
    //   return;
    // }
    fetch(`http://api.zhaopin.com/im/user/getUserInfo?token=${token}&access_token=${token}`)
      .then(res=>res.json())
      .then(result=>{
        console.log
        if(result.code!=200){
          message.error(result.message)
          return ;
        }
        var {userId} = JSON.parse(result.data);
        this.props.setUserInfo({
          ...values,
          userId,
          deviceId:faker.random.uuid()
        });
        connection.getClient();
        if(values.remember){
          setLoginInfo(values);
        }
      })



  }
  render(){
    return (
      <Row>
        <LoginForm onSubmit={this.handleSubmit} />
      </Row>

    )
  }
}
function mapSateToProps(state){
  return {
    connectStatus:state.connect.status,
    connectType:0
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setUserInfo:bindActionCreators(setUserInfo, dispatch),
  }
}
export default connect(mapSateToProps,mapDispatchToProps)(LoginIndex);
