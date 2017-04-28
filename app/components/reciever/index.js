/**
 * Created by daishun on 2017/4/21.
 */
import React from "react";
import {Row,Col} from "antd";

export class Terminal extends React.Component{
  render(){
    return(
      <Row >
        <Col sm={19} style={{color: "gray",background:"white", fontFamily:' "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'}}>
          <ul style={{width:"100%",height:"400px",overflowY:"scroll"}}>
            {this.props.dataSource.map((v)=> {
              return(
                <li style={{margin:"10px"}}>

                  <span style={{color: "rgb(248, 167, 0)",marginRight:"10px"}}>{v.time}</span>
                  <span style={{color: "rgb(248, 167, 0)",marginRight:"10px"}}>{v.unique}</span>
                  <span style={{color: "rgb(248, 167, 0)",marginRight:"10px"}}>{v.type}</span>
                  <span style={{display:" block",width:"640px",wordBreak:"break-all"}}>{v.data}</span>
                </li>
              )
            })}
          </ul>
        </Col>
        <Col sm={5}>

        </Col>
      </Row>
    )
  }
}
