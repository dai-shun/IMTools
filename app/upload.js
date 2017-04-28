/**
 * Created by daishun on 2017/4/23.
 */
import {ipcMain} from "electron";
import path from "path";
import fs from "fs";

ipcMain.on('upload-message', (event, filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err){
      throw err;
      return;
    }
    event.sender.send('upload-reply',data) ;
  });
})

ipcMain.on('menu-message', (event, filePath) => {
  fs.readFile(path.join(__dirname,'menu.json'), 'utf8', (err, data) => {
    if (err){
      console.log(err)
      event.sender.send('menu-reply',JSON.stringify({})) ;
      return;
    }
    event.sender.send('menu-reply',data) ;
  });
})
