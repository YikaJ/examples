import * as React from 'react';
import { Button, Platform } from 'remax';
import './index.css';

const WechatLoginButton = ({ login, children }) => {
  return (
    <Button
      className="login-button wechat"
      hoverClass="none"
      openType="getUserInfo"
      onGetUserInfo={login}
    >
      {children}
    </Button>
  );
};

const AlipayButton = ({ login, children }) => {
  return (
    <Button className="login-button" hoverClass="none" onClick={login}>
      {children}
    </Button>
  );
};

const LoginButton = (...props) => {
  if (Platform.isWechat) {
    return WechatLoginButton(...props);
  }

  if (Platform.isAlipay) {
    return AlipayButton(...props);
  }
};

export default LoginButton;
