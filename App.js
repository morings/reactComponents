import { useModalVisible } from './hooks';
import React, { useState } from 'react';
import { Form, Icon, Button, Modal } from 'antd';
function TextModal(props) {
  const { title, visible, text, close } = props;
  return (
    <Modal visible={visible} title={title} onCancel={close} onOk={close}>
      <span>{text}</span>
    </Modal>
  );
}
function App(props) {
  const Modal = useModalVisible(TextModal);
  open = () => {
    Modal.open({ 
      title: '文本内容',
    });
  };
  return (
    <div>
      <Button onClick={open}>打开弹窗</Button>
      <Modal title={'文本标题'} />
    </div>
  );
}
export default Form.create()(App);
