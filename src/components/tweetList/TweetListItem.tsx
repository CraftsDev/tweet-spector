import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Tweet } from '../../services/api/Twitter';
import variables from '../../shared/variables';
import { Chip, ChipContainer } from '../chip';
import Image from '../image';
import Typography from '../typography';
import Box from './../box/Box';

const StyledAnchor = styled.a`
  color: rgb(27, 149, 224);
  text-decoration: none;
  cursor: pointer;
`;

const LeftDiv = styled.div`
  width: 52px;
  float: left;
`;

const RightDiv = styled.div`
  margin-left: 52px;
`;

export interface TweetListItemProps {
  backgroundColor: string;
  borderRadius?: string;
  tweet: Tweet;
  className?: string;
}

const TweetListItem: FunctionComponent<TweetListItemProps> = ({
  backgroundColor,
  borderRadius,
  tweet
}) => {
  const { protocol } = window.location;
  const isSecure = protocol === 'https:';

  const regexEndURL = /(http(s)?:\/\/t.co\/.*$)/;
  const endURLMatch = tweet.text.match(regexEndURL);
  const useText = tweet.text.replace(regexEndURL, '');
  return (
    <Box
      shadow={false}
      boxRadius={borderRadius ? borderRadius : '0'}
      padding={'1em'}
      backgroundColor={backgroundColor}
      className={'tweet-item'}
      style={{ display: 'block' }}>
      <LeftDiv>
        <Image
          margin='0 14px 0 0'
          src={`${
            (isSecure
              ? tweet?.user?.profile_image_url_https
              : tweet?.user?.profile_image_url) || ''
          }`}
          isCircular
        />
      </LeftDiv>
      <RightDiv>
        <Typography TagType='h5'>@{tweet?.user?.screen_name || ''}</Typography>
        <Typography
          TagType='p'
          color={variables.ThemeColors.tweetListItem.fontColor}
          style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {`${useText}   `}
          {endURLMatch && (
            <StyledAnchor target='_BLANK' href={endURLMatch[0]}>
              {endURLMatch[0]}
            </StyledAnchor>
          )}
        </Typography>
        {tweet?.entities?.hashtags && (
          <ChipContainer>
            {tweet?.entities?.hashtags.map((tag, index) => (
              <Chip hashTag={tag} key={`hash-tag-${index}`} />
            ))}
          </ChipContainer>
        )}
      </RightDiv>
    </Box>
  );
};

export default TweetListItem;
