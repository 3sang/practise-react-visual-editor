import React from 'react';
import styles from './index.css';
import EditorSource from '@/EditorSource/view';

export default function Index() {
  // function namespace(oNamespace, sPackage) {
  //   const arr = sPackage.split('.');
  //   let pointer = oNamespace;
  //   arr.map(item => {
  //     if (!pointer[item] || typeof pointer[item] !== 'object') {
  //       pointer[item] = {};
  //     }

  //     pointer = pointer[item];
  //   });

  //   return oNamespace;
  // }

  function formatDate(date, formatStr) {
    console.log(typeof date.getFullYear());
    const obj = {
      yyyy: date.getFullYear(),
      yy: ('' + date.getFullYear()).substr(-2),
      MM: date.getMonth() + 1,
      M: ('0' + (date.getMonth() + 1)).substr(-2),
      dd: date.getDate(),
      d: ('0' + date.getDate()).substr(-2),
      H: date.getHours(),
      HH: ('0' + date.getHours()).substr(-2),
      m: date.getMinutes(),
      mm: ('0' + date.getMinutes()).substr(-2),
      s: date.getSeconds(),
      ss: ('0' + date.getSeconds()).substr(-2),
      w: ['日', '一', '二', '三', '四', '五', '六'][date.getDay()],
    };

    return formatStr.replace(/([\w]+)/gi, text => {
      return obj[text];
    });
  }

  return (
    <div
      onClick={() =>
        console.log(
          formatDate(
            new Date(1409894060000 + new Date().getTimezoneOffset() * 60 * 1000),
            'yyyy-MM-dd HH:mm:ss 星期w',
          ),'2014-09-05 05:14:20 星期五',
          formatDate(
            new Date(1409894060000 + new Date().getTimezoneOffset() * 60 * 1000),
            'yyyy-MM-dd HH:mm:ss 星期w',
          ) === '2014-09-05 05:14:20 星期五'
        )
      }
    >
      测试
    </div>
  );
}
