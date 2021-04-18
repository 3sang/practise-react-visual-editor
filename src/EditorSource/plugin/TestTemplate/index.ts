/*
 * Description  : 用于测试的模板JSON
 * Author       : Saraku.
 * Date         : 2021-04-18 23:19:31
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-19 00:05:13
 */

export default {
  type: 'div',
  props: {
    style: {
      border: '1px solid black',
      height: '300px',
      width: '80%',
    },
  },
  childrenNodes: [{
    type: 'div',
    props: {
      style: {
        border: '1px solid black',
        height: '200px',
        width: '200px',
      },
    },
  }],
};
