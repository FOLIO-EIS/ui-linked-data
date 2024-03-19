import { AUTOCLEAR_TIMEOUT } from '@common/constants/storage.constants';
import { localStorageService } from '@common/services/storage';
import { generateRecordBackupKey } from './progressBackup.helper';
import { IDENTIFIER_AS_VALUE, PROFILE_BFIDS, TYPE_URIS } from '@common/constants/bibframe.constants';
import { formatRecord } from './recordFormatting.helper';
import { BLOCKS_BFLITE } from '@common/constants/bibframeMapping.constants';

export const getRecordId = (record: RecordEntry | null, selectedBlock?: string) => {
  const block = selectedBlock || TYPE_URIS.INSTANCE;

  return record?.resource?.[block]?.id;
};

export const getRecordWithUpdatedID = (record: RecordEntry, id: RecordID) => ({
  resource: {
    ...record.resource,
    [TYPE_URIS.INSTANCE]: { ...record.resource[TYPE_URIS.INSTANCE], id },
  },
});

export const deleteRecordLocally = (profile: string, recordId?: RecordID) => {
  const storageKey = generateRecordBackupKey(profile, recordId);

  localStorageService.delete(storageKey);
};

export const generateRecordData = (record: ParsedRecord) => {
  return {
    createdAt: new Date().getTime(),
    data: record,
  };
};

export const generateAndSaveRecord = (storageKey: string, record: ParsedRecord) => {
  const newRecord = generateRecordData(record);

  localStorageService.serialize(storageKey, newRecord);

  return newRecord;
};

export const saveRecordLocally = ({
  profile,
  parsedRecord,
  record,
  selectedRecordBlocks,
}: {
  profile: string;
  parsedRecord: ParsedRecord;
  record: RecordEntry | null;
  selectedRecordBlocks?: SelectedRecordBlocks;
}) => {
  if (!record) return;

  const recordId = getRecordId(record) as string;
  const storageKey = generateRecordBackupKey(profile, recordId);
  const formattedRecord = formatRecord({ parsedRecord, record, selectedRecordBlocks });
  const updatedRecord = getRecordWithUpdatedID(formattedRecord as RecordEntry, recordId);

  return generateAndSaveRecord(storageKey, updatedRecord as ParsedRecord);
};

export const getSavedRecord = (profile: string, recordId?: RecordID): LocallySavedRecord | null => {
  const storageKey = generateRecordBackupKey(profile, recordId);
  const savedRecordData = localStorageService.deserialize(storageKey);

  if (savedRecordData && !savedRecordData?.data) {
    return generateAndSaveRecord(storageKey, savedRecordData);
  }

  return savedRecordData ? autoClearSavedData(savedRecordData, profile, recordId) : null;
};

export const autoClearSavedData = (savedRecordData: LocallySavedRecord, profile: string, recordId?: RecordID) => {
  const shouldBeCleared = savedRecordData.createdAt + AUTOCLEAR_TIMEOUT <= new Date().getTime();

  if (!shouldBeCleared) return savedRecordData;

  deleteRecordLocally(profile, recordId);

  return null;
};

export const checkIdentifierAsValue = (record: Record<string, string[]>, uri: string) => {
  const identifierAsValueSelection = IDENTIFIER_AS_VALUE[uri];

  if (identifierAsValueSelection) {
    const { field, value } = identifierAsValueSelection;

    if (record?.[field]?.includes(value)) {
      return record;
    }
  }

  return false;
};

export const getPrimaryEntitiesFromRecord = (record: RecordEntry, editable = true) => {
  const isInstance = record?.resource[TYPE_URIS.INSTANCE];
  const workAsPrimary = editable ? [PROFILE_BFIDS.WORK] : [PROFILE_BFIDS.INSTANCE];
  const instanceAsPrimary = editable ? [PROFILE_BFIDS.INSTANCE] : [PROFILE_BFIDS.WORK];

  return isInstance ? instanceAsPrimary : workAsPrimary;
};

export const getEditingRecordBlocks = (record: RecordEntry) => {
  const typedBlocksList = BLOCKS_BFLITE as RecordBlocksBFLite;

  let block;
  let reference;

  for (const key in typedBlocksList) {
    const blockItem = typedBlocksList[key];

    if (!record[blockItem.uri]) continue;

    block = blockItem.uri;
    reference = blockItem.reference;
  }

  return { block, reference };
};
