import { FunctionComponent, PropsWithChildren } from 'react';
import styled, { CSSProperties } from 'styled-components';

const StyleDiv = styled.div<BoxProps>`
  display: flex;
  ${(props) => (props.flexGrow ? `flex-grow: ${props.flexGrow};` : '')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  ${(props: BoxProps) =>
    props.shadow
      ? `box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
        0px 3px 4px 0px rgb(0 0 0 / 14%),
        0px 1px 8px 0px rgb(0 0 0 / 12%);`
      : ''}
  background-color: ${(props: BoxProps) =>
    props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
  color: ${(props: BoxProps) =>
    props.textColor ? props.textColor : 'rgba(0, 0, 0, 0.87)'};
  padding: ${(props: BoxProps) =>
    props.padding ? props.padding : '14px 20px'};
  border-radius: ${(props: BoxProps) =>
    props.boxRadius ? props.boxRadius : '4px'};
  margin: auto;
`;

export interface BoxProps {
  shadow?: boolean;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  boxRadius?: string;
  flexDirection?: string;
  flexGrow?: number;
  style?: CSSProperties;
  className?: string;
}
const Box: FunctionComponent<PropsWithChildren<BoxProps>> = ({
  shadow = true,
  children,
  className,
  backgroundColor,
  textColor,
  padding,
  boxRadius,
  style,
  flexDirection,
  flexGrow,
}) => {
  return (
    <StyleDiv
      shadow={shadow}
      backgroundColor={backgroundColor}
      textColor={textColor}
      padding={padding}
      boxRadius={boxRadius}
      flexDirection={flexDirection}
      className={`${className || ''} box`}
      style={style}
    >
      {children}
    </StyleDiv>
  );
};

export default Box;
