import React, { Component } from 'react'
import '@/styles/test.less'

import QueuiAnim from 'rc-queue-anim'
import Logo from '@/components/logo/logo'
import { brandName } from '@/configs/config.js'


export default class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)

    this.state = {
      loading: false,
      isCertificates: false,  // 是否认证吧 ?
      show: true
    }
  }
  // 挂载完成周期
  componentDidMount() {

  }

  render() {
    return (
      <div className="login-container">
        <div className="flexcolumn">222222222222222222222
          <div className="login-header" key="header">
            <div className="slogan">
              <QueuiAnim className="flexcolumn" type={['right', 'left']} key="p">
                {
                  this.state.show ? [
                    <p key="0" className="title">{brandName}</p>
                  ] : null
                }
              </QueuiAnim>
            </div>

            <Logo />
          </div>
          <div className="login-main">
            <QueuiAnim> </QueuiAnim>
          </div>
        </div>
      </div>
    )
  }

}
