import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { TweetAppActionTypes } from '../../reducers';
import { HashTag } from '../../services/api/Twitter/TwitterResponseObjects';
import variables, { COLORS } from '../../shared/variables';
import { AppStoreDispatchContext, AppStoreStateContext } from '../app/App';

const StyledChip = styled.div`
  border-radius: 20px;
  padding: 10px 17px;
  margin: 6px 5px;
  box-sizing: border-box;
  display: inline-block;
  font-weight: 600;
  &:hover {
    box-shadow: 0px 0.75px 0.75px -0.5px rgb(0 0 0 / 5%),
      0px 0.75px 1px 0px rgb(0 0 0 / 4.5%), 0px 0.25px 2px 0px rgb(0 0 0 / 3%);
  }
`;

const StyledIcon = styled.span`
  padding: 3px 6px 3px 3px;
`;

export interface ChipProps {
  hashTag: HashTag;
  ChipIcon?: IconProp;
  contentColor?: string;
  selectedBackgroundColor?: string;
  bgColor?: string;
}
const Chip: FunctionComponent<ChipProps> = ({
  hashTag,
  ChipIcon,
  contentColor,
  selectedBackgroundColor,
  bgColor,
}) => {
  const tc = contentColor || variables.ThemeColors.chip.textDefault;
  const sbgc = selectedBackgroundColor || COLORS.INPUT_FOCUS_BLUE;
  const bgc = bgColor || variables.ThemeColors.chip.backgroundDefault;

  const { hashTagFilters } = useContext(AppStoreStateContext);
  const dispatch = useContext(AppStoreDispatchContext);

  const selectedChipBGColor = hashTagFilters.filter(
    (filterHashTag) => filterHashTag.text === hashTag.text
  )[0]
    ? sbgc
    : bgc;

  const onClickHandler = () => {
    dispatch({
      type: TweetAppActionTypes.ToggleHashTagFilter,
      payload: {
        hashTag,
      },
    });
  };

  return (
    <StyledChip
      onClick={onClickHandler}
      style={{
        backgroundColor: selectedChipBGColor,
      }}
    >
      {ChipIcon && (
        <StyledIcon>
          <FontAwesomeIcon
            icon={ChipIcon}
            style={{
              color: tc,
            }}
          />
        </StyledIcon>
      )}
      <span
        style={{
          color: tc,
        }}
      >
        {hashTag.text}
      </span>
    </StyledChip>
  );
};

export default Chip;
