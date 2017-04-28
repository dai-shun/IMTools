/**
 * Created by daishun on 2017/4/21.
 */
import React from "react";
import {Row,Col,Modal} from "antd";
import connection from "../../connection";
import {connect} from "react-redux";
import {changeSenderModalVisible} from "../../actions/sender";
import { bindActionCreators } from 'redux';
import RequestForm from "../requestForm";
import {analysis,addMessage} from "../../template";
import {remote,ipcRenderer} from "electron";
import PubSub from "pubsub-js"
const dialog= remote.dialog;
class Sender extends React.Component{
  sendMessage=()=>{
    let client = connection.getClient();
    let json = this.editor.get();
    var request = analysis(json);
    addMessage(JSON.stringify(request));
    request.body = JSON.stringify(request.body);
    console.log("sendMessage ",request)
    client.publish(request);
  }
  saveRequest=()=>{
    dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        {name: 'All Files', extensions: ['json']}
      ]
    },(paths)=>{
      var path = paths[0];
      if(!path){
        return;
      }
      ipcRenderer.on('upload-reply', (event, data) => {
        console.log("upload-reply",data) // prints "pong"
        if(data){
          localStorage.setItem("MENU_LIST",data);
          this.props.setMenuList(JSON.parse(data))
        }
      })
      ipcRenderer.send('upload-message',path)
    })
    // this.props.changeSenderModalVisible(true);
  }
  modalCancel=()=>{
    // this.props.changeSenderModalVisible(false);
  }
  handleSubmit=(values)=>{

  }
  componentDidMount(){
    let container = document.getElementById("editor");
    var options = {
      // modes: ['text', 'code'],
      mode: 'code',
      ace: ace,
      onError:(err)=>{
        console.error(err)
      }
    };
    var json = {
    };
    this.editor = new JSONEditor(container, options, json);
    PubSub.subscribe("set_editor",(topic,data)=>{
      this.editor.set(data);
    })
  }
  render(){

    return (
      <Row>
        <Col sm={19}>
          <div id="editor" style={{height:"300px"}}></div>
        </Col>
        <Col sm={5}>
          <button className="ui inverted  button" style={{margin:"10px 0 10px 5px"}} onClick={this.sendMessage}><i className="send icon"></i>send message</button>
        <br/>
          <button className="ui inverted  button" style={{margin:"10px 0 10px 5px"}} onClick={this.saveRequest}><i className="upload icon"></i>upload config</button>
          <br/>
        </Col>
        <RequestForm {...this.props} modalCancel={this.modalCancel} handleSubmit={this.handleSubmit}/>
      </Row>
    )
  }
}
function mapSateToProps(state){
  return {
    modalVisible:state.sender.modalVisible,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    changeSenderModalVisible:bindActionCreators(changeSenderModalVisible, dispatch),
  }
}
export default connect(mapSateToProps,mapDispatchToProps)(Sender);
