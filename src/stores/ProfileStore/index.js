import { observable,action,runInAction } from 'mobx'
import axios from 'axios'

import { GetQueryString } from '../../util'

class ProfileStore {
	@observable systemInfo = {}
	@observable userInfo = {}
	@observable loginErrorText = ""
	@observable getVerifyCodeState = false
	@observable getVerifyCodeText = "获取验证码"
	@observable getVerifyCodeTimeCount = 60
	@observable imgVerifyCodeUrl = "/phoneLogin/validateCode?time=" + (new Date()).valueOf()
	@observable verifyCodeTimer = null
	//  用户信息存储在本地的KEY名
	STORAGE_KEY_USER_INFO = 'FRONT_USER_INFO'
	//  系统信息存储在本地的KEY名
	STORAGE_KEY_SYSTEM_INFO = 'FRONT_SYSTEM_INFO'

	constructor() {
	  	this.restoreUserInfoFromStorage()
	  	this.restorageSystemInfoFromStorage()
	}
	/**
	 * 设置系统缓存
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	@action setSystemInfoStorage = (data) => {
		const value=localStorage.getItem(this.STORAGE_KEY_SYSTEM_INFO)
        let newData = {}
        if(value){
        	const jsValue=JSON.parse(value)
            newData = {...jsValue,...data}
        }else{
        	newData = data
        }

        this.systemInfo = newData
        localStorage.setItem(this.STORAGE_KEY_SYSTEM_INFO,JSON.stringify(newData))
	} 
	/**
	 * 设置用户信息缓存
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	@action setUserInfoStorage = (data) => {
		const value=sessionStorage.getItem(this.STORAGE_KEY_USER_INFO)
        let newData = {}
        if(value){
        	const jsValue=JSON.parse(value)
            newData = {...jsValue,...data}
        }else{
        	newData = data
        }
        this.userInfo = newData
        sessionStorage.setItem(this.STORAGE_KEY_USER_INFO,JSON.stringify(newData))
	}
		@action setUserInfoStorage = (data) => {
		const value=sessionStorage.getItem(this.STORAGE_KEY_USER_INFO)
        let newData = {}
        if(value){
        	const jsValue=JSON.parse(value)
            newData = {...jsValue,...data}
        }else{
        	newData = data
        }
        this.userInfo = newData
        sessionStorage.setItem(this.STORAGE_KEY_USER_INFO,JSON.stringify(newData))
	}
	/**
	 * 从本地缓存恢复用户信息
	 * @return {[type]} [description]
	 */
	@action restoreUserInfoFromStorage = () => {
		const value=sessionStorage.getItem(this.STORAGE_KEY_USER_INFO)
        if(value){
            this.userInfo = JSON.parse(value)
        }
	}
	/**
	 * 从本地缓存恢复系统信息
	 * @return {[type]} [description]
	 */
	@action restorageSystemInfoFromStorage = () => {
		const value=localStorage.getItem(this.STORAGE_KEY_SYSTEM_INFO)
        if(value){
            this.systemInfo = JSON.parse(value)
        }
	}
	@action refreshImgVerifyCodeUrl = () => {
		const nowTime = (new Date()).valueOf()
		this.imgVerifyCodeUrl = "/phoneLogin/validateCode?time=" + nowTime
	}
	/**
	 * 获取短信验证码计时器
	 * @return {[type]} [description]
	 */
	@action getVerifyCodeTimer = () => {
		if(this.getVerifyCodeTimeCount === 0){
			this.getVerifyCodeState = false
			this.getVerifyCodeText = "获取验证码"
		}else{
			this.getVerifyCodeState = true
			this.getVerifyCodeText = "重新发送"+this.getVerifyCodeTimeCount+"s"
			this.getVerifyCodeTimeCount  = this.getVerifyCodeTimeCount-1
			this.verifyCodeTimer=setTimeout(() => {
			  	this.getVerifyCodeTimer()
			}, 1000)
		}
	}
	@action checkAndGetCode = async (body) => {
		const res1 = await axios.post("/phoneLogin/validateCode/check",body)
		if(res1.code === 200){
			const res2 = await axios.get("/phoneLogin/verification",{params:{telephone:body.telephone}})
			if(res2.code === 200){
				runInAction(() => {
					this.getVerifyCodeTimer()
				})
				
			}
		}
	} 
	/**
	 * 点击获取短信验证码按钮操作
	 * @param  {[type]} form [description]
	 * @param  {[type]} e    [description]
	 * @return {[type]}      [description]
	 */
	@action handleGetCodeClick = (form,e) => {
		e.preventDefault() 

		form.validateFields(async (err,values) => {
			let fields = ["telephone","verifyCode"]
			if(err){
				let state = false
				fields.every((value) => {
					if(err[value]){
						this.loginErrorText = err[value].errors[0].message
						state = false
						return false
					}else{
						this.loginErrorText = ""
						state = true
						return true
					}
				})

				if(state){
					await this.checkAndGetCode({telephone:values.telephone,verifyCode:values.verifyCode})
				}
			}
		})
	}
	/**
	 * 用户登录
	 * @param  {[type]} form [description]
	 * @param  {[type]} e    [description]
	 * @return {[type]}      [description]
	 */
	@action login = (form,index,e) => {
		e.preventDefault()

		this.loginErrorText = ""
		form.validateFields(async (err,values) => {
			let fields = ["telephone","password","verifyCode","code"]
			if(err){
				fields.every((value) => {
					if(err[value]){
						this.loginErrorText = err[value].errors[0].message
						return false
					}else{
						return true
					}
				})
			}else{
				let url = ""
				if(index === 0){
					url = "/phoneLogin/login" 
				}
				if(index === 1){
					url = "/phoneLogin/loginByCode"
				}

				if(index === 2) {
					url = "/phoneLogin/registered"
				}

				if(index === 3){
					url="/phoneLogin/resetPassword"
				}
				if(url){
					const res = await axios.post(url,{...values,companyId:GetQueryString("companyId")})

					if(res.code === 200){
						let systemInfo = {telephone:values.telephone}
							
						if(index === 1){
							if(systemInfo.remember){
								systemInfo.password = values.password
								systemInfo.remember = true
							}else{
								systemInfo.password = ""
								systemInfo.remember = false
							}
						}
						if(index === 0 || index === 1){
							this.setUserInfoStorage({isLogin:true,token:res.data.token})
						}
						if(index === 2 || index === 3){

						}

						this.setSystemInfoStorage(systemInfo)
					}
				}
			}
		})
	}
	/**
	 * 用户退出
	 * @return {[type]} [description]
	 */
	@action logout = () => {

	}

}

export default ProfileStore