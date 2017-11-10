import React, { Component, PropTypes } from 'react' // 引入React
import { connect } from 'react-redux' // 引入connect
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../reducers/demo'

class Demo extends Component {

    constructor(props){
        super(props)
    }

    click () {
        this.props.action.fetchData()
    }

    left(){
        $('.people').shape('flip left');
    }

    up(){
        $('.people').shape('flip up');
    }

    down(){
        $('.people').shape('flip down');
    }

    right(){
        $('.people').shape('flip right');
    }

    over(){
        $('.people').shape('flip over');
    }

    back(){
        $('.people').shape('flip back');
    }

    render () {

        const str = this.props.list[1] || '測試'

        return(
            <div>
                <div>
                    <div>{str}</div>
                    <div className="ui button" onClick = {this.click.bind(this)}>按钮</div>
                </div>
                <div className="ui people shape">
                  <div className="sides">
                    <div className="side">
                      <div className="ui card">
                        <div className="image">
                          <img src="/images/1.jpeg"/>
                        </div>
                        <div className="content">
                          <div className="header">Steve Jobes</div>
                          <div className="meta">
                            <a>Acquaintances</a>
                          </div>
                          <div className="description">Steve Jobes is a fictional character designed to resemble someone familiar to readers. </div>
                        </div>
                        <div className="extra content">
                          <span className="right floated">Joined in 2014 </span>
                          <span><i className="user icon"></i> 151 Friends </span>
                        </div>
                      </div>
                    </div>
                    <div className="side active">
                      <div className="ui card">
                        <div className="image">
                          <img src="/images/1.jpeg"/>
                        </div>
                        <div className="content">
                          <a className="header">Stevie Feliciano</a>
                          <div className="meta">
                            <span className="date">Joined in 2014</span>
                          </div>
                          <div className="description">Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing. </div>
                        </div>
                        <div className="extra content">
                          <a><i className="user icon"></i> 22 Friends </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui ignored divider"></div>
                <div className="ui ignored icon direction buttons">
                    <div className="ui button" data-animation="flip" data-direction="left" title="Flip Left" onClick = {this.left.bind(this)}><i className="left long arrow icon"></i></div>
                    <div className="ui button" data-animation="flip" data-direction="up" title="Flip Up" onClick = {this.up.bind(this)}><i className="up long arrow icon"></i></div>
                    <div className="ui icon button" data-animation="flip" data-direction="down" title="Flip Down" onClick = {this.down.bind(this)}><i className="down long arrow icon"></i></div>
                    <div className="ui icon button" data-animation="flip" data-direction="right" title="Flip Right" onClick = {this.right.bind(this)}><i className="right long arrow icon"></i></div>
                </div>
                <div className="ui ignored icon direction buttons">
                    <div className="ui button" data-animation="flip" data-direction="over" title="Flip Over" onClick = {this.over.bind(this)}><i className="retweet icon"></i></div>
                    <div className="ui button" title="Flip Back" data-animation="flip" data-direction="back" onClick = {this.back.bind(this)}><i className="flipped retweet icon"></i></div>
                </div>
            </div>
        )
    }
}


// 获取state中的list值
const getData = state => {
    return {
        list: state.demo.demo
    }
}

const getMethod = dispatch => {
  return {
    action: bindActionCreators(TodoActions, dispatch)
  }
}

// 利用connect将组件与Redux绑定起来
export default connect(getData,getMethod)(Demo)