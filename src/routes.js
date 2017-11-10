import React from 'react' // 引入react
import { Route, IndexRoute ,IndexRedirect ,Redirect} from 'react-router' // 引入react路由
import App from './App' // 引入各容器组件
import Demo from './components/demo'
import Slideshow from './components/slideshow'
import Login from './components/login'
//import Homework from './components/homework'
const checkLogin = async (nextState, replace , callback)=>{
  // const rsp = await fetch('https://admin.class100.com/api/info',{
  //   credentials: 'include'
  // })
  //let {code} = await rsp.json()
  const code = 200
  if(nextState.location.pathname == '/login'){
    code == 200 ? replace('/homework') : code
  }else{
    code == 200 ? code : replace('/login')
  }
  callback()
}

// export default (
// 	<Route>
// 	    <Route name = '/' path="/" component={App}>
// 	        {/*<IndexRoute component={login}/>*/}
// 	        <IndexRedirect to="/login" />
// 	        <Route name = 'demo' path="demo" component={Demo}/>
// 	        <Route name = 'slideshow' path="slideshow" component={Slideshow}/>
// 	        <Route name="homework" path = 'homework' component={Homework} onEnter={checkLogin}/>

// 	    </Route>
// 	    <Route path = "/login" component={Login} onEnter = {checkLogin}></Route>
// 	</Route>
// )

export default (
  <Route>
    <Route name = "/" path="/" component={App}>
        {/*<IndexRoute component={login}/>*/}
        <IndexRedirect to="/login" />
	    <Route name = 'demo' path="demo" component={Demo}/>
        <Route path="/slideshow" component={Slideshow} onEnter = {checkLogin}/>
    </Route>
    <Route path = "/login" component={Login} ></Route>
  </Route>
)