import * as service from '../services/editor';

export default {
  namespace: 'editor',
  state: {
    // 当前选择的组件名和props信息：[name+key]:nodeInfo
    currentSelect:{},
    currentMove:{}, // 当前移动的对象：[name+key]:nodeInfo
    currentLayout:{} // 当前的页面布局描述JSON，可以直接生成Dom的那种
  },
  subscriptions: {},

  effects: {
  },

  reducers: {},
};
