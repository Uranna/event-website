import { FunctionComponent, ReactNode} from 'react';
import { ModalContent, Modal as ModalView } from '@/styled-component/Modal';
import { ReactComponent as Close } from '@/assets/image/close.svg';

interface ModalProps {
  title?: string;
  children: ReactNode;
  in: boolean;
  closeModal():void
}

const Modal: FunctionComponent<ModalProps> = ({ title, in: show, closeModal, children }) => {
  return (
    <>
      {show && (
        <ModalView>
          <div className='backdrop' onClick={closeModal}></div>
          <ModalContent>
            <button className='modal__close' onClick={closeModal}>
              <Close />
            </button>
            {title && <h2 className='modal__header'>{title}</h2>}
            {children}
          </ModalContent>
        </ModalView>
      )}
    </>
  );
};

export default Modal;
