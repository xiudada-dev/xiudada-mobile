<<<<<<< HEAD
import React,{ Component } from 'react'
import { Button, InputItem } from 'antd-mobile'
import { createForm } from 'rc-form'
import { inject, observer } from 'mobx-react'

import './style.css'

@inject("profileStore")
@observer
class Register extends Component {
	componentWillMount(){
		const { profileStore } = this.props
		profileStore.loginErrorText=""
		profileStore.getVerifyCodeState=false
		profileStore.getVerifyCodeText="获取验证码"
		profileStore.getVerifyCodeTimeCount=60
		profileStore.imgVerifyCodeUrl="/phoneLogin/validateCode?time=" + (new Date()).valueOf()
		clearInterval(profileStore.verifyCodeTimer)
	}
	render(){
		const { form, profileStore } = this.props
		const { getFieldProps } = form

		return (
			<div className="register">
				<div className="top">
					<img src="/imgs/company_logo.jpg" alt="系统logo"/>
					<p>为荣集团有限公司欢迎您</p>
					<p>欢迎您</p>
				</div>
				<div className="wrapper">
					<InputItem
			            {...getFieldProps('telephone',{
			            	initialValue:"",
			            	rules:[{required:true,message:"请输入手机号"},{pattern:/^1[34578][0-9]{9}$/,message:"手机号格式不正确"}]
			            })}
			            placeholder="请填写您的手机号"
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
			        		disabled={profileStore.getVerifyCodeState}
			        	>
			        		{profileStore.getVerifyCodeText}
			        	</Button>
			        </InputItem>
			        <InputItem
			            {...getFieldProps('password',{
			            	initialValue:"",
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
					

					<div className="btn_register">
						<Button 
							type="primary"
							onClick={profileStore.login.bind(this,form,2)}
						>
							注册
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default createForm()(Register)  
=======
import React,{ Component } from 'react'
import { Button } from 'antd-mobile' 

import './style.css'

class Register extends Component {
	render(){
		return (
			<div className="register">
				<div className="top">
					<img src="/imgs/web_logo.png" alt="系统logo"/>
					<p>休哒哒</p>
					<p>欢迎您</p>
				</div>
				<div className="wrapper">
					{/*<div className="error_tip">
				    	*请输入密码
				    </div>*/}

					<div className="btn-register">
						<Button type="primary">
							注册
						</Button>
					</div>
				</div>
			</div>
		)
	}
}

export default Register
>>>>>>> ljh
