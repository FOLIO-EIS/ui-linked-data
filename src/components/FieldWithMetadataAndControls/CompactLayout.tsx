import { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import { DuplicateGroup } from '@components/DuplicateGroup';

type ICompactLayout = {
  children: ReactNode;
  displayName?: string;
  showLabel?: boolean;
  labelContainerClassName?: string;
  hasDuplicateGroupButton?: boolean;
  onClickDuplicateGroup?: VoidFunction;
};

export const CompactLayout: FC<ICompactLayout> = memo(
  ({ children, displayName, showLabel, labelContainerClassName, hasDuplicateGroupButton, onClickDuplicateGroup }) => {
    return (
      <>
        {displayName && showLabel && <div className={classNames('label', labelContainerClassName)}>{displayName}</div>}
        {children}
        {hasDuplicateGroupButton && <DuplicateGroup onClick={onClickDuplicateGroup} />}
      </>
    );
  },
);
