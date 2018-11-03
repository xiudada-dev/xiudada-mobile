import axios from 'axios'
import { Toast } from 'antd-mobile'

/**
 * 拦截异步请求
 * @param  {[type]} (config [description]
 * @return {[type]}         [description]
 */
axios.interceptors.request.use((config)=>{	
	Toast.loading("数据加载中",0)	
	return config
})
/**
 * 拦截异步响应
 * @param  {[type]} (response) [description]
 * @param  {[type]} (error     [description]
 * @return {[type]}            [description]
 */
axios.interceptors.response.use((response)=>{
	Toast.hide()
	if(response.data.code === 200){
		return response.data
	}else {
		MessageError(response.data.code,response.data.msg)

		return response
	}
},(error)=>{
	if(error && error.response){
		MessageError(error.response.status)
	}

	return error
})

/**
 * 异步响应错误信息提示
 * @param  {[type]} errorCode [description]
 * @param  {[type]} errMsg    [description]
 * @return {[type]}           [description]
 */
const MessageError=(errorCode,errMsg)=>{
	let msg = ''
	switch(errorCode) {
		case 400:
			msg = errMsg || '请求参数错误'
			break
		case 401:
			msg = errMsg || '没有权限'
			break
		case 404:
			msg = errMsg || '请求的api没有找到'
			break
		case 500:
			msg = errMsg || '与服务器连接断开'
			break
		default:
			msg = errMsg || '未知错误'
	}

	Toast.fail(msg)
}