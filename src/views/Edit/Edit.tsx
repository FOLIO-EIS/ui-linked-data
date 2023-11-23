import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { EditSection } from '@components/EditSection';
import { Properties } from '@components/Properties';
import { Loading } from '@components/Loading';
import { PROFILE_BFIDS } from '@common/constants/bibframe.constants';
import { DEFAULT_RECORD_ID } from '@common/constants/storage.constants';
import { getSavedRecord, getRecordWithUpdatedID } from '@common/helpers/record.helper';
import { scrollEntity } from '@common/helpers/pageScrolling.helper';
import { useConfig } from '@common/hooks/useConfig.hook';
import { useRecordControls } from '@common/hooks/useRecordControls';
import state from '@state';
import './Edit.scss';
import { UserNotificationFactory } from '@common/services/userNotification';
import { StatusType } from '@common/constants/status.constants';

export const Edit = () => {
  const setRecord = useSetRecoilState(state.inputs.record);
  const { getProfiles } = useConfig();
  const { fetchRecord, clearRecordState } = useRecordControls();
  const { resourceId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const setStatusMessages = useSetRecoilState(state.status.commonMessages);

  useEffect(() => {
    scrollEntity({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    async function loadRecord() {
      setIsLoading(true);

      try {
        if (resourceId) {
          await fetchRecord(resourceId);
          return;
        }

        clearRecordState();

        const profile = PROFILE_BFIDS.MONOGRAPH;
        const savedRecordData = getSavedRecord(profile);
        const typedSavedRecord = savedRecordData ? (savedRecordData.data as RecordEntry) : null;
        const record = typedSavedRecord ? getRecordWithUpdatedID(typedSavedRecord, DEFAULT_RECORD_ID) : null;
        const typedRecord = record as unknown as RecordEntry;

        typedRecord && setRecord(typedRecord);
        getProfiles({ record: typedRecord });
      } catch {
        setStatusMessages(currentStatus => [
          ...currentStatus,
          UserNotificationFactory.createMessage(StatusType.error, 'marva.error-loading-record'),
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    loadRecord();
  }, [resourceId]);

  return (
    <div data-testid="edit-page" className="edit-page">
      <Properties />
      <EditSection />
      {isLoading && <Loading />}
    </div>
  );
};
