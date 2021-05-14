import { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../shared/variables';

const StyleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -3px -6px;
  cursor: pointer;
  @media (max-width: 820px) {
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 0 0 10px 0;
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${COLORS.LIGHT_GREY};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${COLORS.GREY};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${COLORS.HEADER_COLOR};
    }
    &::-webkit-scrollbar {
      height: 15px;
    }
  }
`;

const ChipContainer: FunctionComponent<PropsWithChildren<{}>> = ({
  children
}) => <StyleDiv>{children}</StyleDiv>;

export default ChipContainer;
