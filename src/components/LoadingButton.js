import React, { useState } from 'react';
import { Button } from 'antd';

const LoadingButton = ({ onClick, children, ...restProps }) => {
  // 使用useState来管理loading状态
  const [loading, setLoading] = useState(false);
  // 处理点击事件
  const handleClick = async e => {
    // 设置loading为true
    setLoading(true);

    // 假设onClick是一个返回Promise的函数，这里模拟异步操作
    try {
      // 调用外部传入的onClick函数
      if (onClick) {
        await onClick(e, () => {
          setLoading(false);
        });
      }
      // 异步操作完成后，设置loading为false
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      // 可以在这里处理错误情况，比如显示错误信息
      setLoading(false);
    }
  };

  return (
    <Button loading={loading} onClick={handleClick} {...restProps}>
      {children}
    </Button>
  );
};

export default LoadingButton;
