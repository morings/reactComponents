import React, { useContext } from 'react';
import { Select } from 'antd';
import Context from '../context';

export default function (props) {
  const status = useContext(Context);
  const { options = [], ...others } = props;
  const { value = '', defaultValue = '' } = others;
  if (status === 'Detail') {
    const selectedItem = options.find(item => item.value === (value || defaultValue));
    const text = selectedItem ? selectedItem.label : '';
    return <span className="dispatch-text">{text}</span>;
  } else {
    return (
      <Select {...others}>
        {options.map(item => (
          <Select.Option key={item.value} {...item}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
