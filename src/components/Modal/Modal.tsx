import { FC, ReactNode, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { MODAL_CONTAINER_ID } from '@common/constants/uiElements.constants';
import Times16 from '@src/assets/times-16.svg?react';
import './Modal.scss';
import { Button, ButtonType } from '@components/Button';
// TODO: Uncomment for using with Shadow DOM
// import { WEB_COMPONENT_NAME } from '@common/constants/web-component';

interface Props {
  isOpen: boolean;
  title: string;
  className?: string;
  submitButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  shouldCloseOnEsc?: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
  children?: ReactNode;
  showCloseIconButton?: boolean;
}

const Modal: FC<Props> = ({
  isOpen,
  className,
  title,
  submitButtonLabel,
  cancelButtonLabel,
  shouldCloseOnEsc = true,
  onSubmit,
  onCancel,
  onClose,
  children,
  submitButtonDisabled,
  cancelButtonDisabled,
  showCloseIconButton = true,
}) => {
  const portalElement = document.getElementById(MODAL_CONTAINER_ID) as Element;
  // TODO: uncomment for using with Shadow DOM
  // || (document.querySelector(WEB_COMPONENT_NAME)?.shadowRoot?.getElementById(MODAL_CONTAINER_ID) as Element)

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (!shouldCloseOnEsc || event.key !== 'Escape') return;

      onClose();
    }

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return isOpen && portalElement
    ? createPortal(
        <>
          <div className="overlay" onClick={onClose} data-testid="modal-overlay" />
          <div className={classNames(['modal', className])} role="dialog" data-testid="modal">
            <div className="modal-header">
              {showCloseIconButton && (
                <button onClick={onClose} className="close-button">
                  <Times16 />
                </button>
              )}
              <h3 className="title">{title}</h3>
            </div>
            {!!children && children}
            <div className="modal-controls">
              <Button
                disabled={cancelButtonDisabled}
                onClick={onCancel}
                type={ButtonType.Primary}
                data-testid="modal-button-cancel"
              >
                {cancelButtonLabel}
              </Button>
              <Button
                disabled={submitButtonDisabled}
                type={ButtonType.Highlighted}
                onClick={onSubmit}
                data-testid="modal-button-submit"
              >
                {submitButtonLabel}
              </Button>
            </div>
          </div>
        </>,
        portalElement,
      )
    : null;
};

export default memo(Modal);
