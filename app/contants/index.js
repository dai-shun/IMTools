/**
 * Created by daishun on 2017/4/9.
 */

export const  deviceType={
  WINDOWS:"tester_winodws",
  MAC:`tester_mac`,
  ANDROID:`tester_android`,
  IOS:`tester_ios`
}
export const connectType={
  SOCKET_IO:"0",
  MQTT:"1"
}

export const storageKey={
  USER_INFO:"userinfo",
  GLOBAL_CONFIG:"globalConfig",
  LAST_REQUEST_JSON:"LAST_REQUEST_JSON"
}
export const DB={
  NAME:"message_center",
  VERSION:4
}

export const tableName={
  RECEIVED_MESSAGE:"receivedMessage",
  MESSAGE:"message",
  REQUEST:"request",
  USER:"user",
  SEND_MESSAGE:"sendMessage",
}

export const PubSubTopic={
  START_CONNECT_TO_SERVER:"START_CONNECT_TO_SERVER",
  CHANGE_REQUEST_MESSAGE:"CHANGE_REQUEST_MESSAGE"

}
