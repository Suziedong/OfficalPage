
import React, { Component, PropTypes } from 'react' // 引入React
import './index.css'
let index = 1;
let timer;
export default class Slideshow extends  Component {

	componentDidMount(){
    
        container.onmouseover = this.stop;
        container.onmouseout = this.play;    

	}

	handle =(value)=> { 

        const clickIndex = value + 1
        var offset = 600 * (index - clickIndex); //这个index是当前图片停留时的index
        this.animate(offset);
        index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
        this.buttonsShow();
	}
	
	handleprev =()=> {

		index -= 1;
        if (index < 1) {
            index = 5
        }
        this.buttonsShow();
        this.animate(600);

	}
	handlenext =()=> {
		
		index += 1;
        if (index > 5) {
            index = 1
        }
        this.animate(-600);
        this.buttonsShow();

	}
	animate =(offset) => {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        const list = document.getElementById('list');
        const newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -600) {
            list.style.left = -3000 + 'px';
        }
        if (newLeft < -3000) {
            list.style.left = -600 + 'px';
        }
    }
    play =() => {
    	const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        //重复执行的定时器
        timer = setInterval( ()=> {
            this.handlenext();
        }, 2000)
    }
    stop =() => {
        clearInterval(timer);
    }
    buttonsShow =()=> {
        //将之前的小圆点的样式清除
        const buttons = document.getElementById('buttons').getElementsByTagName('span');
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = "on";
    }

	render () {
		return (
			<div>
				<div>Slideshow</div>
				
				<div id="container">
				    <div id="list" style={{left: '-600px'}}>
				        <img src="/images/5.jpg" alt="1"/>
				        <img src="images/1.jpg" alt="1"/>
				        <img src="images/2.jpg" alt="2"/>
				        <img src="images/3.jpg" alt="3"/>
				        <img src="images/4.jpg" alt="4"/>
				        <img src="images/5.jpg" alt="5"/>
				        <img src="images/1.jpg" alt="5"/>
				    </div>
				    <div id="buttons">
				    		{[1,1,1,1,1].map((item,index)=>
				    			(
				    			<span  key={index} 
				    			onClick={this.handle.bind(this,index)}
				    				className={index=='0'?'on':' '}></span>)
				    		)}				
				    </div>
				    <a href="javascript:;" id="prev" className="arrow" onClick={this.handleprev}>&lt;</a>
				    <a href="javascript:;" id="next" className="arrow" onClick={this.handlenext}>&gt;</a>
			</div>
				
			</div>
		)
	}

}