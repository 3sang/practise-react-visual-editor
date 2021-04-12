import React from 'react';
import styles from './index.css';
import EditorSource from '@/EditorSource';

export default function Index() {
  const numadd = throttle(
    flag => {
      console.log(flag);
    },
    1000,
    { leading: true, trailing: true },
  );

  function throttle(func, wait, options?: any) {
    let timeout = null;
    let previous = 0;
    if (!options) options = { leading: true, trailing: false };

    return () => {
      let now = new Date().getTime();

      // 第一次不会立即执行，remaining=wait,等过了这么久才能执行。
      if (!previous && !options.leading) previous = now;
      // 当前离n毫秒还剩多少，如果超出事件就可以执行了
      const remaining = wait - (now - previous);

      if (remaining <= 0) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(this, ['1', ...arguments]);
      } else if (!timeout && options.trailing) {
        // 最后一次需要执行,如果上一次定时器还没结束，说明是最后一次。
        // 这里意思是如果确实要执行最后一次，就把每一次的最后都记录下来，当timeout为空时表明remaining<0执行过，设定一个定时器计算剩余时间。
        // 如果本次后还未清除此定时器，过了wait时间就会执行，否则那么就不是“最后一次”，remaining<0，自动清除。

        timeout = setTimeout(() => {
          clearTimeout(timeout);
          previous = now;
          func.apply(this, ['2', ...arguments]);
        }, wait);
      }
    };
  }

  return <button onClick={numadd}>增加</button>;
}
