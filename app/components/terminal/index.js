/**
 * Created by daishun on 2017/4/21.
 */
import React from "react";
import {Row,Col} from "antd";
import styles from "./index.css";
import UserInfo from "../userInfo"
class Terminal extends React.Component{
  render(){
    return(
      <Row>
          <Col sm={19} className={styles.content}>
              <ul className={styles.ulc}>
                  {this.props.dataSource.map((v)=> {
                      return(
                          <li style={{margin:"10px"}}>
                              <span className={styles.span1}>{v.time}</span>
                              <span className={styles.span1}>{v.unique}</span>
                              <span className={styles.span1}>{v.type}</span>
                              <span className={styles.span2}>{v.data}</span>
                          </li>
                      )
                  })}
              </ul>
          </Col>
          <Col sm={5}>
              <UserInfo {...this.props}/>
          </Col>
      </Row>
    )
  }
}
export default Terminal;
