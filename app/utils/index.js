/**
 * Created by daishun on 2017/4/12.
 */

export const Message={
  parse:function (jsonStr) {
    var json =JSON.parse(jsonStr);
    if(json.body){
      var body = JSON.parse(json.body);
      json.body=body;
    }
    return json;
  }
}
