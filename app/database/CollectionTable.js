/**
 * Created by daishun on 2017/4/12.
 */
/**
 * Created by daishun on 2017/4/11.
 */
import {tableName} from "../contants";
import DataBase from "./db";

/**
 * name string 名称
 * description  描述
 * @param data
 * @param callback
 */
function insert(data,callback) {
  DataBase.ready(function (db) {
    console.log("insertReceivedMessage",this);
    var obj={}
    obj.createTime=new Date();
    obj.type=data.header.type;
    obj.group=data.header.group;
    obj.signall=data.header.signall;
    obj.unique=data.header.unique;
    obj.content=data;
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
      .add(obj).onsuccess = (event)=>{
      console.log("insert success!");
      if(callback){
        callback();
      }
    };
  })
}
function query(count=100,callback) {
  DataBase.ready(function (db) {
    console.log("queryReceivedMessage")
    var arr=[];
    db.transaction(tableName.MESSAGE).objectStore(tableName.MESSAGE).index("createTime")
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
function queryReqMsg(count=100,callback) {
  DataBase.ready(function (db) {
    console.log("queryReqMsg")
    var arr=[];
    db.transaction(tableName.MESSAGE).objectStore(tableName.MESSAGE).index("type")
      .openCursor(IDBKeyRange.only(1),'prev').onsuccess = (event)=> {
      var cursor = event.target.result;
      if(cursor) {
        console.log("queryReqMsg cursor.value",cursor.value)
        arr.push(cursor.value);
        if(arr.length==count){//只取一定数量，倒序
          console.log("queryReqMsg result",arr)
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
function queryServerMsg(count=100,callback) {
  DataBase.ready(function (db) {
    console.log("queryServerMsg")
    var arr=[];
    db.transaction(tableName.MESSAGE).objectStore(tableName.MESSAGE).index("createTime")
      .openCursor(null,'prev').onsuccess = (event)=> {
      var cursor = event.target.result;
      if(cursor) {
        console.log("queryServerMsg cursor.value",cursor.value)
        arr.push(cursor.value);
        if(arr.length==count){//只取一定数量，倒序
          console.log("queryServerMsg result",arr)
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

export default {insert,query,queryReqMsg,queryServerMsg};
