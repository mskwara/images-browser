import { useContext } from 'react';
import { ModalContext } from 'providers/Modal';
import { actions } from 'providers/Modal/reducer';

const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a ModalContext');
  }

  const openModal = ({ title, payload }) =>
    context.dispatch({
      type: actions.OPEN,
      title,
      payload,
    });

  const closeModal = () =>
    context.dispatch({
      type: actions.CLOSE,
    });

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
