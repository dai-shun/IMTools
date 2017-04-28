/**
 * Created by daishun on 2017/4/21.
 */
import React from "react";
import styles from "./index.css"
import PubSub from "pubsub-js";

export default (props)=>{
    var arr=[];
    const {menuList,filter,setMenuFilter} =props;
    for(var key in menuList){
      if(key.indexOf(filter)>=0){
        arr.push(key);
      }
    }
    console.log("setMenuFilter",setMenuFilter)
    return (
      <div className="ui inverted mini vertical pointing menu" style={{width:"12rem"}}>
        <div className="item">
          <div className="ui  icon input">
            <i className="search icon" ></i>
            <input type="text" placeholder="Search..." onChange={(e)=>setMenuFilter(e.target.value)}/>
          </div>
        </div>
        {arr.map((v,i)=>{
          return <a className={styles.lia} onClick={()=>PubSub.publish("set_editor",menuList[v])} key={"lia"+i}>{v}</a>
        })}
      </div>
    )
}
// export default class MenuList extends React.Component{
//   render(){
//     var arr=[];
//     const {menuList,filter,setMenuFilter} = this.props;
//     for(var key in menuList){
//       if(key.indexOf(filter)>=0){
//         arr.push(key);
//       }
//     }
//     console.log("setMenuFilter",setMenuFilter)
//     return (
//       <div className="ui inverted mini vertical pointing menu" style={{width:"12rem"}}>
//         <div className="item">
//           <div className="ui  icon input">
//             <i className="search icon" ></i>
//             <input type="text" placeholder="Search..." onChange={(e)=>setMenuFilter(e.target.value)}/>
//           </div>
//         </div>
//         {arr.map(v=>{
//           return <a className={styles.lia} onClick={()=>PubSub.publish("set_editor",menuList[v])}>{v}</a>
//         })}
//       </div>
//     )
//   }
// }
