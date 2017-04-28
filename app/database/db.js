/**
 * Created by daishun on 2017/4/11.
 */
import React from "react";
import {tableName,DB} from "../contants";
class DataBase{
  constructor() {
    this.db = null;
    this.callbacks=[];
    this.clearCallback=this.clearCallback.bind(this);
    this.createMessageTable=this.createMessageTable.bind(this);
    this.createRequestTable=this.createRequestTable.bind(this);
    this.ready = this.ready.bind(this);
    let DBOpenRequest = window.indexedDB.open(DB.NAME, DB.VERSION);
    DBOpenRequest.onerror = (event)=> {
      console.error("Error loading database.");
      console.dir(event)
    }
    DBOpenRequest.onsuccess = (event)=> {
      this.db = DBOpenRequest.result;
      console.log("Database initialised.", event);
      this.clearCallback();
    };
    DBOpenRequest.onupgradeneeded = (event)=> {
      console.log("Database onupgradeneeded.")
      this.db = event.target.result;
      this.createMessageTable();
      this.createRequestTable();
      this.db.onerror = (event)=> {
        console.dir(event);
      };
    }
  }
  clearCallback(){
    for(var i=0;i<this.callbacks.length;i++){
        var fn = this.callbacks[i];
        fn(this.db);
    }
    this.callbacks=[];
  }
  ready(fn){
    if(this.db){
      fn(this.db);
    }else{
      this.callbacks.push(fn);
    }
  }
  createMessageTable(){
    console.log("createMessageTable")
    var objectStore = this.db.createObjectStore(tableName.MESSAGE, {keyPath: "id",autoIncrement:true});
    objectStore.createIndex("id", "id", {unique: false});
    objectStore.createIndex("type", "type", {unique: false});
    objectStore.createIndex("group", "group", {unique: false});
    objectStore.createIndex("signall", "signall", {unique: false});
    objectStore.createIndex("unique", "unique", {unique: false});
    objectStore.createIndex("createTime","createTime",{unique:false})
  }
  createRequestTable(){
    console.log("createRequestTable")
    var objectStore = this.db.createObjectStore(tableName.REQUEST, {keyPath: "id",autoIncrement:true});
    objectStore.createIndex("id", "id", {unique: false});
    objectStore.createIndex("name", "name", {unique: false});
    objectStore.createIndex("description", "description", {unique: false});
    objectStore.createIndex("collectionId", "collectionId", {unique: false});
    objectStore.createIndex("message", "message", {unique: false});
  }
}

export default new DataBase();
