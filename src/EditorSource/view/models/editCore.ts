/*
 * Description  : 所有事件的中心model
 * Author       : Saraku.
 * Date         : 2021-04-12 22:52:10
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-18 00:02:55
 */
import * as services from '../services/editCore';
import { EffectsCommandMap, AnyAction } from '../../types/modelsType';

export default {
  namespace: 'editCore',
  state: {
    // 当前选择的组件名和props信息：[name+key]:nodeInfo
    currentSelect: {},
    currentMove: {}, // 当前移动的对象：[name+key]:nodeInfo
    currentLayout: {}, // 当前的页面布局描述JSON，可以直接生成Dom的那种
  },
  effects: {
    *setSelected({ payload }: AnyAction, { put }: EffectsCommandMap) {
      yield put({
        type: 'saveSelected',
        payload: { currentSelect: payload },
      });
    },
  },
  reducers: {
    saveSelected(state: any, { payload }: AnyAction) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
