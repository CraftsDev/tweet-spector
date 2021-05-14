import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img<ImageProps>`
  ${(props: ImageProps) => {
    return props.isCircular ? 'border-radius: 50%;' : '';
  }}
  ${(props: ImageProps) => {
    return props.margin ? `margin: ${props.margin};` : '';
  }}
`;

export interface ImageProps {
  src: string;
  isCircular?: boolean;
  height?: number;
  width?: number;
  alt?: string;
  margin?: string;
}

const Image: FunctionComponent<ImageProps> = ({
  isCircular,
  src,
  margin,
  height = 38,
  width = 38,
  alt = '',
}) => (
  <StyledImage
    isCircular={isCircular}
    src={src}
    height={height}
    width={width}
    alt={alt}
    margin={margin}
  />
);

export default Image;
