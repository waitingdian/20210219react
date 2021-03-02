import React, { useState } from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from "./router";
moment.locale('zh-cn');

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((x,y,z) => {
  console.log("ononon", x,y,z)
});
