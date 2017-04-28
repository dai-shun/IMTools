// @flow
import React, { Component } from 'react';
import {Row,message} from "antd";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {push} from "react-router-redux";

message.config({
  getContainer:()=>document.getElementById("app")
})
class Home extends Component {
  componentDidMount(){
    // Modal.info("ss")
  }
  render() {
    const {connectStatus,connectType} = this.props;
    let html ="";
    return (
      <Row>
        {this.props.children}
        {html}
      </Row>
    );
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
    push:bindActionCreators(push, dispatch),
  }
}
export default connect(mapSateToProps,mapDispatchToProps)(Home);

