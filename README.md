写的仿 react-visual-editor 练习 ts 项目
原项目地址：https://gitee.com/sync-github/react-visual-editor

使用 ts+react+umi

---

边写代码边添加的注释 orz

##### 渲染到页面上的 plugin 使用 JS 对象描述，为了适配核心的 React.createElemnt 函数，以及增加代码可读性，使用以下的格式。

```javascript
{
  'default':{                 // 第一个对象被认为是根节点
    type:'div',               // 可以任意取 HTML 标签、antd 组件、或自开发组件名
    props:{
    style:{background:'black',height:'300px',width:'300px'}
    },
  childrenNodes:['child1']    // 数组对象，此处取键值名，生成函数根据键值名匹配其下子节点
  },
  'child1':{
    type:'div',
    props:{
    style:{background:'black',height:'200px',width:'200px'}
    },
  }
}
```
