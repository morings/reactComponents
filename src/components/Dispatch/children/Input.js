import React, { useContext } from 'react';
import { Input } from 'antd';
import Context from '../context';
import { isNull } from '../utils';
export default function (props) {
  const status = useContext(Context);
  const { value = '', defaultValue = '' } = props;
  if (status === 'Detail') {
    let text = '';
    if (!isNull(defaultValue)) {
      text = defaultValue.toString();
    }
    if (!isNull(value)) {
      text = value.toString();
    }
    return <span className="dispatch-text">{text}</span>;
  } else {
    return <Input {...props} />;
  }
}
