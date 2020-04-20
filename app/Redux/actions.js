/*
* action creator 模块 包含 n 个 action creator 函数
* */
import {DECREMENT, INCREMENT, ISLOADING} from "./actionTypes";
import LocalStorage from "../util/LocalStorage";
import {post} from "../service/Interceptor";

// 增加运算
export const increment = (number) => ({type: INCREMENT,number});

// 减少运算
export const decrement = (number) => ({type: DECREMENT,number});

// 是否登陆
export const isLoading = (value) => ({type: ISLOADING,value});

// 异步增加运算action
export const incrementAsync = (number) => {
  return (dispatch) => {
    // 执行一个异步操作
    post('https://www.softcasing.com/Home/Report/getReportResult',{report_id:"242", openid:"o6sYR5dv8sDVj1NdMSt5VTyyLu70"})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        dispatch(increment(number))
      });
  }
};

// 异步减少运算action
export const decrementAsync = (number) => {
  return (dispatch) => {
    // 执行一个异步操作
    setTimeout(() => {
      // 异步执行得到结果后，通知action
      dispatch(decrement(number))
    }, 1000)
  }
};
