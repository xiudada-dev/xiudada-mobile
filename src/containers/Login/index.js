<<<<<<< HEAD
import React,{ Component } from 'react'
import { Button, Tabs, InputItem, Checkbox } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'
import { inject, observer } from 'mobx-react'

import './style.css'

const AgreeItem = Checkbox.AgreeItem
const tabs = [
  { title: "密码登录" },
  { title: "验证码登录" },
]

@inject("profileStore")
@observer
class Login extends Component {
	constructor(props) {
	 	super(props)
	
	  	this.state = {
	  		currentTabIndex:0
	  	}
	}
	componentWillMount(){
		const { profileStore } = this.props
		profileStore.loginErrorText=""
		profileStore.getVerifyCodeState=false
		profileStore.getVerifyCodeText="获取验证码"
		profileStore.getVerifyCodeTimeCount=60
		profileStore.imgVerifyCodeUrl="/phoneLogin/validateCode?time=" + (new Date()).valueOf()
		clearInterval(profileStore.verifyCodeTimer)
	}
	handleChangeTab(tab,index){
		const { profileStore } = this.props

		profileStore.loginErrorText = ""
		this.setState({
			currentTabIndex:index
		})
	}
	render(){
		const { form, profileStore } = this.props
		const { getFieldProps } = form
		const { currentTabIndex } = this.state

		return (
			<div className="login">
				<div className="top">
					<img src="/imgs/company_logo.jpg" alt="公司logo"/>
					<p>维融集团有限公司</p>
					<p>欢迎您</p>
				</div>
				<div className="wrapper">
					 <Tabs 
					 	tabs={tabs} 
					 	initialPage={currentTabIndex} 
					 	animated={false} 
					 	useOnPan={false}
					 	tabBarTextStyle={{fontSize:"1.2rem"}}
					 	onChange={this.handleChangeTab.bind(this)}
					 >
					    {currentTabIndex ===0 && 
					    	<div className="tab" >
						    	<InputItem
						            {...getFieldProps('telephone',{
						            	initialValue:profileStore.systemInfo.telephone || "",
						            	rules:[{required:true,message:"请输入手机号"},{pattern:/^1[34578][0-9]{9}$/,message:"手机号格式不正确"}]
						            })}
						            placeholder="请输入您的手机号"
						            clear={true}
						            className="input telephone"
						            labelNumber={3}
						        >
						        	<img src="/imgs/icon/phone.png" alt="手机图标"/>
						        </InputItem>
						        <InputItem
						            {...getFieldProps('password',{
						            	initialValue:profileStore.systemInfo.password || "",
						            	rules:[{required:true,message:"请输入密码"}]
						            })}
						            placeholder="请输入密码"
						            clear={true}
						            className="input password"
						            type="password"
						            labelNumber={3}
						        >
						        	<img src="/imgs/icon/lock.png" alt="锁图标"/>
						        </InputItem>

						        
							    {profileStore.loginErrorText && 
							    	<div className="error_tip">
								    	*{profileStore.loginErrorText}
								    </div>
							    }

							    <div className="remember_password">
							    	<AgreeItem 
							    		{...getFieldProps('remember',{
							    			valuePropName: 'checked',
							    			initialValue:profileStore.systemInfo.remember || false
							    		})}
							    		className="agree"
							    	>
							            记住密码 
						          	</AgreeItem>
							        <Link to="/forgetPwd">忘记密码</Link>
							    </div>
						    </div>
					    }
					    {currentTabIndex === 1 && 
					    	<div className="tab">
						        <InputItem
						            {...getFieldProps('telephone',{
						            	initialValue:profileStore.systemInfo.telephone || "",
						            	rules:[{required:true,message:"请输入手机号"},{pattern:/^1[34578][0-9]{9}$/,message:"手机号格式不正确"}]
						            })}
						            placeholder="请输入您的手机号"
						            clear={true}
						            className="input telephone"
						            labelNumber={3}
						        >
						        	<img src="/imgs/icon/phone.png" alt="手机图标"/>
						        </InputItem>
						        <InputItem
						            {...getFieldProps('verifyCode',{
						            	initialValue:"",
						            	rules:[{required:true,message:"请输入图像验证码"}]
						            })}
						            placeholder="请输入图像验证码"
						            className="input telephone"
						            labelNumber={3}
						        >
						        	<img src="/imgs/icon/meg.png" alt="图像验证图标"/>
						        	<img 
						        		src={profileStore.imgVerifyCodeUrl}
						        		alt="图像验证码" 
						        		className="imgVerifyCode" 
						        		onClick={profileStore.refreshImgVerifyCodeUrl.bind(this)}
						        	/>
						        </InputItem>
						        <InputItem
						            {...getFieldProps('code',{
						            	initialValue:"",
						            	rules:[{required:true,message:"请输入验证码"}]
						            })}
						            placeholder="请输入验证码"
						            clear={true}
						            className="input password"
						            labelNumber={3}
						        >
						        	<img src="/imgs/icon/shield.png" alt="盾图标"/>
						        	<Button 
						        		type="primary" 
						        		className="verifyCodeBtn"
						        		size="small"
						        		onClick={profileStore.handleGetCodeClick.bind(this,form)}
						        		disabled = {profileStore.getVerifyCodeState}
						        	>
						        		{profileStore.getVerifyCodeText}
						        	</Button>
						        </InputItem>

						        {profileStore.loginErrorText && 
							    	<div className="error_tip">
								    	*{profileStore.loginErrorText}
								    </div>
							    }

						    </div>
					    }
				    </Tabs>
				    
					<div className="btn_login">
						<Button 
							type="primary"
							onClick={profileStore.login.bind(this,form,currentTabIndex)}
						>
							登录
						</Button>
					</div>
					<div className="no_account">
						<Link to="/register">
							还没有账号，立即注册
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

=======
import React,{ Component } from 'react'
import { Button, Tabs, InputItem, List, Checkbox, Icon } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'

import './style.css'

const AgreeItem = Checkbox.AgreeItem
const tabs = [
  { title: "密码登录" },
  { title: "验证码登录" },
]

class Login extends Component {
	render(){
		const { form } = this.props
		const { getFieldProps } = form

		return (
			<div className="login">
				<div className="top">
					<img src="/imgs/company_logo.jpg" alt="公司logo"/>
					<p>维融集团有限公司</p>
					<p>欢迎您</p>
				</div>
				<div className="wrapper">
					 <Tabs 
					 	tabs={tabs} 
					 	initialPage={0} 
					 	animated={false} 
					 	useOnPan={false}
					 	tabBarTextStyle={{fontSize:"1.2rem"}}
					 >
					    <div className="tab" >
					    	<InputItem
					            {...getFieldProps('telephone')}
					            placeholder="请填写您的手机号"
					            clear={true}
					            className="input telephone"
					            labelNumber={3}
					        >
					        	<img src="/imgs/icon/phone.png" alt="手机图标"/>
					        </InputItem>
					        <InputItem
					            {...getFieldProps('password')}
					            placeholder="请输入密码"
					            clear={true}
					            className="input password"
					            labelNumber={3}
					        >
					        	<img src="/imgs/icon/lock.png" alt="锁图标"/>
					        </InputItem>
					    </div>
					    <div className="tab">
					        待开发
					    </div>
				    </Tabs>
				    {/*<div className="error_tip">
				    	*请输入密码
				    </div>*/}
				    <div className="remember_password">
				    	<AgreeItem className="agree">
				            记住密码 
			          	</AgreeItem>
				        <Link to="/forgetPassword">忘记密码</Link>
				    </div>
					<div className="btn_login">
						<Button type="primary">
							登录
						</Button>
					</div>
					<div className="no_account">
						<Link to="/register">还没有账号，立即注册</Link>
					</div>
				</div>
			</div>
		)
	}
}

>>>>>>> ljh
export default createForm()(Login) 