/**
 * Created by daishun on 2017/4/12.
 */
/**
 * Created by daishun on 2017/4/12.
 */
import {tableName} from "../contants";
import DataBase from "./db";

/**
 * name string 名称
 * description string  描述
 * collectionId int 类型
 * message object 请求消息体
 * @param data
 * @param callback
 */
function insert(data,callback) {
  DataBase.ready(function (db) {
    console.log("insert RequestTable...",data)
    var transaction = db.transaction([tableName.REQUEST], "readwrite");
    transaction.oncomplete = function() {
      console.log("Transaction completed: database modification finished.");
    };
    transaction.onerror = function() {
      console.error("Transaction not opened due to error:"+transaction.error)
      if(callback){
        callback(transaction.error);
      }
    };
    transaction.objectStore(tableName.REQUEST)
      .add(data).onsuccess = (event)=>{
      console.log("insert success!");
      if(callback){
        callback();
      }
    };
  })
}
function queryAll(callback) {

  DataBase.ready(function (db) {
    console.log("queryAll RequestTable start...")
    var arr=[];
    db.transaction(tableName.REQUEST).objectStore(tableName.REQUEST)
      .openCursor(null,'prev').onsuccess = (event)=> {
      var cursor = event.target.result;
      if(cursor) {
        console.log("queryAll RequestTable cursor...",cursor.value)
        arr.push(cursor.value);
        cursor.continue();
      }else{
        console.log("queryAll RequestTable...",arr)
        callback&&callback(arr);
      }
    }
  })
}


export default {insert,queryAll};
