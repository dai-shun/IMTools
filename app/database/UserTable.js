/**
 * Created by daishun on 2017/4/11.
 */
import {tableName} from "../contants";
import DB from "./db";
const db = DB.db;
function insert(data,callback) {
  DB.ready(function () {
    console.log("insert UserTable",this);
    data.createTime=new Date();
    data.type=data.header.type;
    data.group=data.header.group;
    data.signall=data.header.signall;
    data.unique=data.header.unique;
    var transaction = db.transaction([tableName.MESSAGE], "readwrite");
    transaction.oncomplete = function() {
      console.log("Transaction completed: database modification finished.");
    };
    transaction.onerror = function() {
      console.error("Transaction not opened due to error:"+transaction.error)
      if(callback){
        callback(transaction.error);
      }
    };
    transaction.objectStore(tableName.MESSAGE)
      .add(data).onsuccess = (event)=>{
      console.log("insert success!");
      if(callback){
        callback();
      }
    };
  })
}
function query(count=10,callback) {
  DB.ready(function () {
    console.log("queryReceivedMessage")
    var arr=[];
    db.transaction(tableName.MESSAGE).objectStore(tableName.MESSAGE)
      .openCursor(null,'prev').onsuccess = (event)=> {
      var cursor = event.target.result;
      if(cursor) {
        console.log("queryReceivedMessage cursor.value",cursor.value)
        arr.push(cursor.value);
        if(arr.length==count){//只取一定数量，倒序
          console.log("queryReceivedMessage result",arr)
          callback&&callback(arr)
        }else {
          cursor.continue();
        }
      }else{
        callback&&callback(arr);
      }
    }
  })
}

export default {insert,query};
