
import React, { Component, PropTypes } from 'react' // 引入React
import { connect } from 'react-redux' // 引入connect
import { bindActionCreators } from 'redux'
import { Link , Redirect , browserHistory } from 'react-router'
import * as TodoActions from '../../reducers/login'
import './index.css'
export default class Login extends  Component {

    constructor(props){
        super(props)
        // this.checklogin()
    }

	componentDidMount(){  

	}

    async handleSubmit (e) {
        e.preventDefault()
        const account = this.refs.account.value
        const password = this.refs.password.value

        // const rsp = await fetch('xxx',{
        //      method: 'POST',
        //      headers: {
        //        'Content-Type': 'application/json'
        //      },
        //      credentials: 'include',
        //      body: JSON.stringify({
        //        account: account,
        //        password: password,
        //      })
        // });
      //let {code,success} = await rsp.json();
      if(1){
        console.log('000000')
        // let cookievalue = cookie.get('class100_session_id')
        // cookie.set('class100_session_id',cookievalue)
        browserHistory.push('/homework')
      }
      //   console.log('d',account)
      //   this.props.action.submitData(account, password)
      //   console.log('9999999',this.props.loginstatus)
      //   if(this.props.loginstatus){
      //       console.log('dddd33')
      //   // let cookievalue = cookie.get('class100_session_id')
      //   // cookie.set('class100_session_id',cookievalue)
      //   browserHistory.push('/homework')
      // }
    }
	render () {
		return (
			<div >
				<div className = 'companyname'>Stratifyd</div>
                <div className='loginform'>
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Account</label>
                        <input type="account" className="form-control"  placeholder="Company email" ref = 'account'
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control"  placeholder="Password" ref = 'password'
                        />
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox"/> Remember me
                        </label>
                      </div>
                      <div className='button'>
                      <button type="submit" className="btn btn-default" onClick = {this.handleSubmit.bind(this)}>Submit</button>
                      </div>
                    </form>	
                </div>			
			</div>
		)
	}

}

// // 获取state中的list值
// const getData = state => {
//     return {
//         loginstatus: state.login.loginstatus
//     }
// }

// const getMethod = dispatch => {
//   return {
//     action: bindActionCreators(TodoActions, dispatch)
//   }
// }

// // 利用connect将组件与Redux绑定起来
// export default connect(getData,getMethod)(Login)