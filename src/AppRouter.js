<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom'
import { observer,inject } from 'mobx-react'

import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import ForgetPwd from './containers/ForgetPwd'

@inject('profileStore')
@observer
class AppRouter extends Component {
	render(){
		const { profileStore } = this.props
		const { userInfo } = profileStore

		return (
			<Router>
				<Switch>
					<Route path='/home' render={()=>(userInfo.isLogin?<Home />:<Redirect to='/login' />)} />
					<Route path='/login' render={()=>(userInfo.isLogin?<Redirect to='/home' />:<Login />)} />			
					<Route path='/register' render={()=>(userInfo.isLogin?<Redirect to='/home' />:<Register />)} />			
					<Route path='/forgetPwd' render={()=>(userInfo.isLogin?<Redirect to='/home' />:<ForgetPwd />)} />
				</Switch>
			</Router>
		)
	}
}

=======
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch, Redirect } from 'react-router-dom'

import Login from './containers/Login'
import Register from './containers/Register'
import Mine from './containers/Mine'
import Index from './containers/Index'
import Repairs from './containers/Repairs'
import OrderList from './containers/OrderList'
import OrderDetail from './containers/OrderDetail'
import Message from './containers/Message'

class AppRouter extends Component {
	render(){
		return (
			<Router>
				<div>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/index" component={Index} />
                    <Route path="/repairs" component={Repairs} />
                    <Route path="/orderlist" component={OrderList} />
					<Route path="/orderdetail" component={OrderDetail} />
                    <Route path="/message" component={Message} />
				</div>
			</Router>
		)
	}
}

>>>>>>> ljh
export default AppRouter