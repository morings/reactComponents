import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Tooltip } from 'antd';
const style = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  display: 'inline-block',
  width: '100%',
};
const checkEllipsis = container => {
  if (container.scrollWidth > container.clientWidth) {
    return true;
  } else {
    return false;
  }
};

export default function Ellipsis(props) {
  const { children } = props;
  const ref = useRef(null);
  const [status, setStaus] = useState(false);
  const onResize = useCallback(() => {
    const status = checkEllipsis(ref.current);
    setStaus(status);
  }, []);
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });
  return (
    <div ref={ref} style={style}>
      {status ? <Tooltip title={children}>{children}</Tooltip> : children}
    </div>
  );
}
