import { FC, memo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Modal } from '@components/Modal';
import './ModalSwitchToNewRecord.scss';
import { useParams } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
  onClose: VoidFunction;
}

export const ModalSwitchToNewRecord: FC<Props> = memo(({ isOpen, onCancel, onSubmit, onClose }) => {
  const { formatMessage } = useIntl();
  const { resourceId } = useParams();

  return (
    <Modal
      isOpen={isOpen}
      title={formatMessage({ id: 'marva.unsavedChanges' })}
      submitButtonLabel={formatMessage({ id: 'marva.saveAndClose' })}
      cancelButtonLabel={formatMessage({ id: 'marva.continueWithoutSaving' })}
      cancelButtonDisabled={!resourceId}
      onClose={onClose}
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <div className="close-record-contents" data-testid="modal-close-record-content">
        <FormattedMessage id="marva.askSaveChangesBeforeProceeding" />
      </div>
    </Modal>
  );
});
