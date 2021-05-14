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

// profile_image_url_https <- we should check for secure protocol and request that if it's currently set.
const TweetListItem: FunctionComponent<TweetListItemProps> = ({
  backgroundColor,
  borderRadius,
  tweet,
}) => {
  // const { protocol } = window.location;
  // const isHTTPS = protocol === 'https:';

  return (
    <Box
      shadow={false}
      boxRadius={borderRadius ? borderRadius : '0'}
      padding={'1em'}
      backgroundColor={backgroundColor}
      className={'tweet-item'}
      style={{ display: 'block' }}
    >
      <LeftDiv>
        <Image
          margin='0 14px 0 0'
          src={`${
            tweet?.user?.profile_image_url ||
            process.env.REACT_APP_AUSTIN_IMAGE ||
            ''
          }`}
          isCircular
        />
      </LeftDiv>
      <RightDiv>
        <Typography TagType='h5'>
          @{tweet?.user?.screen_name || 'acrafts'}
        </Typography>
        <Typography
          TagType='p'
          color={variables.ThemeColors.tweetListItem.fontColor}
          style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {`${tweet?.text}   `}
          <StyledAnchor
            target='_BLANK'
            href={`https://twitter.com/${tweet?.user?.screen_name}/status/${tweet?.id_str}`}
          >
            twitter.com/{tweet?.user?.screen_name}/status/
            {tweet?.id_str}
          </StyledAnchor>
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
