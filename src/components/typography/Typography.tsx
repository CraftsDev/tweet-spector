import { FunctionComponent, PropsWithChildren } from 'react';
import { CSSProperties } from 'styled-components';

export interface TypographyProps {
  fontSize?: number;
  TagType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span' | 'p';
  color?: string;
  style?: CSSProperties;
}

const Typography: FunctionComponent<PropsWithChildren<TypographyProps>> = ({
  fontSize,
  color,
  TagType,
  children,
  style
}) => {
  const DefaultTag = 'h1';
  const paramStyles: { fontSize?: number; color?: string } = {
    fontSize
  };

  if (color) paramStyles.color = color;

  return TagType ? (
    <TagType style={{ ...paramStyles, ...style }}>{children}</TagType>
  ) : (
    <DefaultTag style={paramStyles}>{children}</DefaultTag>
  );
};

export default Typography;
