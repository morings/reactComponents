import React from 'react';
import StatusContext from './context';
import {Input,Select} from './children'
function Dispatch(props) {
  const { status = 'Edit', children } = props;
  return <StatusContext.Provider value={status}>{children}</StatusContext.Provider>;
}
Dispatch.Input = Input
Dispatch.Select = Select
export default Dispatch;
