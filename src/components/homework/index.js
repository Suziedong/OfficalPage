
import React, { Component, PropTypes } from 'react' // 引入React
import { connect } from 'react-redux' // 引入connect
import { bindActionCreators } from 'redux'
import { Link , Redirect , browserHistory } from 'react-router'
import * as TodoActions from '../../reducers/login'
import './index.css'
class Homework extends  Component {

	componentDidMount(){  

	}

	render () {
		return (
			<div >
      			<section id="top-bar" className="top-bar">
		            <div className="top-bar-logo">
		                <img  className="js-company-logo" src="./人工客服工作台_files/logo.png" alt=""/> 
		                <span className="js-company-name" >斯图飞腾</span> 
		                <span className="js-company-domain" >www.stratifdy.cn</span>
		            </div>
		            <div>
		            <i className="js-sortStyle sortStyle"></i>
		            </div>
		        </section>

		        <section id="main-container" style={{height: '1000px'}}>
		            <section id="left-navigation" style={{height: '1000px'}}>
		                <header className="dropdown header-box-yy">
		                    <div id="user_menu">
		                        <div data-toggle="dropdown" className="menuDropdown js-menuDropdown">
		                            <div id="current_user_avatar">
		                                <img className="member_image thumb_48 logo js-my-logo" src="/images/admin.png" id="mylogo"/>
		                            </div>
		                            <span id="current_user_name" className="overflow_ellipsis js-customer-service" title="小董">小董</span> 
		                            <i className="connection_icon js-status-image online"></i> 
		                            <span id="connection_style" className="js-server-group">超级管理员</span> 
		                            <span id="connection_status" style={{display:"none"}}>离线</span>
		                        </div>
		                        <div className="dropdown-menu dropdown-menu-right menu status-user js-status-menu">
		                            <ul className="js-statusList">
		                                <li className="js-status" data-status="1">
		                                    <span className="user-icon-online">在线</span>
		                                </li>
		                                <li className="js-status" data-status="2">
		                                    <span className="user-icon-busy">忙碌</span>
		                                </li>
		                                <li className="js-status js-offlineStatus" data-status="0">
		                                    <span className="user-icon-offine">离线</span>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                    <div id="admin_Invite" className="joinBox-yy js-invite-btn">
		                        <a href="javascript:;" id="openOtherUser"><i></i></a>
		                        <div id="waitNum"  className="js-wait-outer">
		                            <span>邀请新用户</span>
		                        </div>
		                    </div>
		                </header>

		                <ul className="mainNav">
		                    <li>
		                        <ul className="nav nav-tabs js-tab-ul" id="main_tab">
		                            <li className="js-tab-item" style={{width: "144px"}}>
		                                <a href="https://www.sobot.com/chat-web/admins_new/chat.html?id=UuKj7NjD2NjIAP7Fh0Mf6w/rH3VmA0DPMbvOmrddXW/6JvPsKbg+amkECMmmvPUY&amp;lt=1505724283754&amp;st=1#0" data-toggle="tab">当前会话</a>
		                            </li>
		                            <li className="js-tab-item active" style={{float: "right"}}>
		                                <a href="https://www.sobot.com/chat-web/admins_new/chat.html?id=UuKj7NjD2NjIAP7Fh0Mf6w/rH3VmA0DPMbvOmrddXW/6JvPsKbg+amkECMmmvPUY&amp;lt=1505724283754&amp;st=1#0">历史记录</a>
		                            </li>
		                            <li className="hide">
		                                <a href="https://www.sobot.com/chat-web/admins_new/chat.html?id=UuKj7NjD2NjIAP7Fh0Mf6w/rH3VmA0DPMbvOmrddXW/6JvPsKbg+amkECMmmvPUY&amp;lt=1505724283754&amp;st=1#blacklist">来访客户</a>
		                            </li>
		                        </ul>
		                    </li>
		                </ul>
		            </section>
		        </section>

			</div>
		)
	}

}

// 获取state中的list值
const getData = state => {
    return {
        loginstatus: state.login.loginstatus
    }
}

const getMethod = dispatch => {
  return {
    action: bindActionCreators(TodoActions, dispatch)
  }
}

// 利用connect将组件与Redux绑定起来
export default connect(getData,getMethod)(Homework)