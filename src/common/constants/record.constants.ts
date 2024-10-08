export enum ResourceType {
  work = 'work',
  instance = 'instance',
}

export enum RecordStatus {
  saveAndClose = 'saveAndClose',
  saveAndKeepEditing = 'saveAndKeepEditing',
  open = 'open',
  close = 'close',
}

export enum RecordEditActions {
  Edit = 'edit',
  New = 'new',
  Duplicate = 'duplicate',
}
