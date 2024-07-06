import React, {
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
export default function (ModalWrapper) {
  const modalRef = useRef(null);
  const ModalInstance = forwardRef((props, mRef) => {
    const [slotInitProp, setSlotInitProp] = useState({});
    const [visible, setVisible] = useState(false);
    const close = ()=>{
      setVisible(false);
    }
    const open = (initPorps) => {   
      initPorps && setSlotInitProp(initPorps);
      setVisible(true);
    };
    useImperativeHandle(mRef, () => ({ open, close }));
    return (
      <ModalWrapper
        {...props}
        {...slotInitProp}
        close={close}
        visible={visible}
      />
    );
  });
  const Modal = useCallback((props) => {
    return <ModalInstance {...props} ref={modalRef} />;
  }, []);
  Modal.open = (initPorps) => {
    modalRef.current.open(initPorps);
  };
  Modal.close = () => {
    modalRef.current.close();
  };
  return Modal;
}
