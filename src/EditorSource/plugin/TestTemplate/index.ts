/*
 * Description  : 用于测试的模板JSON
 * Author       : Saraku.
 * Date         : 2021-04-18 23:19:31
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-20 21:07:39
 */

export default {
  default: {
    type: 'div',
    props: {
      style: {
        border: '1px solid black',
        height: '300px',
        width: '80%',
      },
    },
    childrenNodes: ['child1', 'child2'],
  },
  child1: {
    type: 'div',
    props: {
      style: {
        border: '1px solid pink',
        height: '200px',
        width: '80%',
      },
    },
    childrenNodes: ['child3'],
  },
  child2: {
    type: 'div',
    props: {
      style: {
        border: '1px solid blue',
        height: '100px',
        width: '100px',
      },
    },
  },
  child3: {
    type: 'div',
    props: {
      style: {
        border: '1px solid red',
        height: '100px',
        width: '100px',
      },
    },
  },
};
