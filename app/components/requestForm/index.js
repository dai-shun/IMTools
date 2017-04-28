/**
 * Created by daishun on 2017/4/21.
 */
import React from 'react';
import ReactDOM from "react-dom";
import {Modal,message} from "antd";

export default class RequestForm extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      loading:false
    }
  }
  handleSubmit=()=>{
    this.setState({...this.state,loading:true});
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    // let collectionSel = this.refs.collectionSel.value;
    // let collection = this.refs.collection.value;
    if(!name){
      message.error("name 不能为空！");
      this.setState({...this.state,loading:false});
      return;
    }
    if(!description){
      message.error("description 不能为空！")
      return;
    }
    // if(!(collectionSel||collection)){
    //   message.error("collection 不能为空！")
    //   return;
    // }
    // console.log(name,description,collectionSel,collection);
  }
  render(){
    return (
      <Modal
        title="SAVE REQUEST"
        wrapClassName="vertical-center-modal"
        visible={this.props.modalVisible}
        onCancel={this.props.modalCancel}
        confirmLoading={this.state.loading}
        onOk={this.handleSubmit}
        width={400}
      >
        <form className="ui form"  style={{color:"black"}}>
          <div className="field">
            <label>REQUEST NAME</label>
            <input type="text" ref="name" placeholder="REQUEST NAME" />
          </div>
          <div className="field">
            <label>Request description</label>
            <input type="text" ref="description" placeholder="Request description" />
          </div>
          {/*<div className="field">*/}
            {/*<label>Saving to existing collection/folder</label>*/}
            {/*<select ref="collectionSel"  placeholder="Request description" >*/}
              {/*<option />*/}
              {/*<option value="1">ios</option>*/}
              {/*<option value="2">android</option>*/}
              {/*<option value="3">windows</option>*/}
              {/*<option value="4">mac</option>*/}
            {/*</select>*/}
          {/*</div>*/}
          {/*<div className="field">*/}
            {/*<label>Or create new collection</label>*/}
            {/*<input type="text" ref="collection" placeholder="Collection Name" />*/}
          {/*</div>*/}
        </form>
      </Modal>

    )
  }
}

