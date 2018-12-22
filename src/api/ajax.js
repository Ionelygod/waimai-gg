/**
 * Created by Fairy on 2018/12/22.
 */
/*
 ajax请求函数模块
 */
import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
   return new Promise((resolve, reject) => {
    let promise;

    if(method === 'GET'){
      promise = axios.get(url, {params: data})
    }else{
      promise = axios.post(url, data)
    }

    promise.then(reponse => {
        resolve(reponse.data)
      }).catch(error => {
        alert('请求错误' + error)
      })
  })



}

