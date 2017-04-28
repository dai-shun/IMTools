/**
 * Created by daishun on 2017/4/20.
 */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from "react-redux";
import {getLoginInfo} from "../../storage/loginInfo"
let LoginForm = props => {
  console.log(props)
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>

      <div className="ui three column centered grid">

        <div className="column">
          <div className="ui inverted segment">
            <div className="ui inverted form">
              <h1 className="ui dividing header" style={{color:"rgba(255, 255, 255, 0.9)"}}>IM   Simulator</h1>
              <div className="field">
                <label>HOST</label>
                <Field
                  name="host"
                  type="text"
                  component="input"
                  label="HOST"
                />
          </div>
          <div className="field">
            <label>PORT</label>
            <Field
              name="port"
              type="text"
              component="input"
              label="PORT"
            />
          </div>
          <div className="field">
            <label>PASSPORT TOKEN</label>
            <Field
              name="token"
              type="text"
              component="input"
              label="PASSPORT TOKEN"
            />
          </div>
          <div className="field">
            <label>CONNECT TYPE</label>
            <Field name="connectType" component="select">
              <option value="0">socket.io</option>
              <option value="1">mqtt</option>
            </Field>
          </div>
          <div className="field">
            <label>DEVICE TYPE</label>
            <Field name="deviceType" component="select" value="1">
              <option value="1">ios</option>
              <option value="2">android</option>
              <option value="3">windows</option>
              <option value="4">mac</option>
            </Field>
      </div>

      <div className="inline  field">
        <div className="ui checkbox">
          <input type="checkbox" tabIndex="0" />
          <Field
            name="remember"
            type="checkbox"
            component="input"
            label="remember"
          />
            <label>remember me!</label>
        </div>
          <button  className="positive ui button mini" type="submit" style={{float:"right"}} disabled={submitting}>CONNECT</button>
      </div>
    </div>
  </div>
  </div>
  </div>
    </form>

  )
};
LoginForm = reduxForm({
  form: 'login'  // a unique identifier for this form
})(LoginForm)
export default LoginForm = connect(
  state => ({
    initialValues: getLoginInfo()
  })           // bind account loading action creator
)(LoginForm)

