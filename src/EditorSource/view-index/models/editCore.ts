/*
 * Description  : 所有事件的中心model
 * Author       : Saraku.
 * Date         : 2021-04-12 22:52:10
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-13 22:14:09
 */
import * as services from '../services/editCore';
import { EffectsCommandMap, AnyAction } from '../../types/modelsType';

export default {
  namespace: 'editCore',
  state: {
    selected: {}, // 选择的数据
  },
  effects: {
    *setSelected({ payload }: AnyAction, { put }: EffectsCommandMap) {
      yield put({
        type: 'editCore/saveSelected',
        payload: { selected: payload },
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
