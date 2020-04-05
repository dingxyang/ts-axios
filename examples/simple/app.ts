/*
 * @Author: Yang
 * @Date: 2020-04-05 18:52:05
 * @LastEditors: Yang
 * @LastEditTime: 2020-04-05 18:54:11
 * @Descripttion:
 * @FilePath: /ts-axios/examples/simple/app.ts
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
