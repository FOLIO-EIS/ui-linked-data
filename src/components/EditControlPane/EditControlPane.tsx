import { FormattedMessage } from 'react-intl';
import { Dropdown } from '@components/Dropdown';
import { DropdownItemType } from '@common/constants/uiElements.constants';
import { RESOURCE_CREATE_URLS } from '@common/constants/routes.constants';
import { RESOURCE_TEMPLATE_IDS, PROFILE_BFIDS } from '@common/constants/bibframe.constants';
import { Button, ButtonType } from '@components/Button';
import { useBackToSearchUri } from '@common/hooks/useBackToSearchUri';
import { useRoutePathPattern } from '@common/hooks/useRoutePathPattern';
import state from '@state';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getMarcRecord } from '@common/api/records.api';
import EyeOpen16 from '@src/assets/eye-open-16.svg?react';
import ExternalLink16 from '@src/assets/external-link-16.svg?react';
import Duplicate16 from '@src/assets/duplicate-16.svg?react';
import Times16 from '@src/assets/times-16.svg?react';
import { UserNotificationFactory } from '@common/services/userNotification';
import { StatusType } from '@common/constants/status.constants';
import { RecordStatus } from '@common/constants/record.constants';
import { IS_DISABLED_FOR_ALPHA } from '@common/constants/feature.constants';
import { useNavigateToEditPage } from '@common/hooks/useNavigateToEditPage';
import { getEditActionPrefix } from '@common/helpers/bibframe.helper';
import './EditControlPane.scss';

export const EditControlPane = () => {
  const isInCreateMode = useRoutePathPattern(RESOURCE_CREATE_URLS);
  const [isLoading, setIsLoading] = useRecoilState(state.loadingState.isLoading);
  const setMarcPreviewData = useSetRecoilState(state.data.marcPreview);
  const currentlyEditedEntityBfid = useRecoilValue(state.ui.currentlyEditedEntityBfid);
  const setStatus = useSetRecoilState(state.status.commonMessages);
  const setRecordStatus = useSetRecoilState(state.status.recordStatus);
  const navigate = useNavigate();
  const searchResultsUri = useBackToSearchUri();
  const { resourceId } = useParams();
  const { navigateAsDuplicate } = useNavigateToEditPage();
  const [queryParams] = useSearchParams();

  const handleFetchMarcData = async () => {
    if (!resourceId) return;

    try {
      setIsLoading(true);

      const marcData = await getMarcRecord({ recordId: resourceId });

      setMarcPreviewData(marcData);
    } catch (error) {
      setStatus(currentStatus => [
        ...currentStatus,
        UserNotificationFactory.createMessage(StatusType.error, 'ld.cantLoadMarc'),
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDuplicate = () => resourceId && navigateAsDuplicate(resourceId);

  const items = [
    {
      id: 'actions',
      labelId: 'ld.actions',
      data: [
        {
          id: 'duplicate',
          type: DropdownItemType.basic,
          labelId: 'ld.duplicate',
          icon: <Duplicate16 />,
          isDisabled: currentlyEditedEntityBfid.has(PROFILE_BFIDS.WORK),
          action: handleDuplicate,
        },
        {
          id: 'viewLinkedData',
          type: DropdownItemType.basic,
          labelId: 'ld.viewLinkedData',
          icon: <EyeOpen16 />,
          isDisabled: IS_DISABLED_FOR_ALPHA,
        },
        {
          id: 'viewMarc',
          type: DropdownItemType.basic,
          labelId: 'ld.viewMarc',
          icon: <EyeOpen16 />,
          hidden: !currentlyEditedEntityBfid.has(PROFILE_BFIDS.INSTANCE),
          action: handleFetchMarcData,
        },
        {
          id: 'viewInInventory',
          type: DropdownItemType.basic,
          labelId: 'ld.viewInInventory',
          icon: <ExternalLink16 />,
          isDisabled: IS_DISABLED_FOR_ALPHA,
        },
      ],
    },
  ];

  return (
    <div className="nav-block nav-block-fixed-height">
      <nav>
        <Button
          data-testid="nav-close-button"
          type={ButtonType.Icon}
          onClick={() => {
            setRecordStatus({ type: RecordStatus.saveAndClose });
            navigate(searchResultsUri);
          }}
          className="nav-close"
        >
          <Times16 />
        </Button>
      </nav>
      <div className="heading">
        {!isLoading &&
          Array.from(currentlyEditedEntityBfid).map(bfid => (
            // TODO: include resource title once record processing refactoring is completed
            <FormattedMessage
              key={bfid}
              id={`ld.${getEditActionPrefix(isInCreateMode, queryParams)}${RESOURCE_TEMPLATE_IDS[bfid]}`}
            />
          ))}
      </div>
      {!isInCreateMode ? (
        <Dropdown labelId="ld.actions" items={items} buttonTestId="edit-control-actions-toggle" />
      ) : (
        <span className="empty-block" />
      )}
    </div>
  );
};
