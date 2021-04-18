/*
 * Description  : 向全局注册组件Model
 * Author       : Saraku.
 * Date         : 2021-04-17 22:53:49
 * LastEditors  : Saraku.
 * LastEditTime : 2021-04-17 23:47:46
 */

import editCore from './editCore';

const modules:any[] = [editCore];

class Index {
  static register() {
    const app = (window as any).g_app;
    if (app) {
      const{_models} = app;
      modules.forEach(module => {
        const {namespace} = module;
        const foundModule = _models.find((model:any) => model.namespace === namespace);
        if (!foundModule) {
          app.model(module);
        }
      });
    }
  }
}

export default Index;
