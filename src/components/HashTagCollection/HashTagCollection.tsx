import React, { useContext } from 'react';
import StringService from '../../services/string';
import { AppStoreStateContext } from '../app/App';
import Box from '../box';
import { Chip, ChipContainer } from '../chip';
import Typography from '../typography';

const HashTagCollection = () => {
  const { hashTags } = useContext(AppStoreStateContext);
  return (
    <Box style={{ width: 'auto' }} className={'hash-cloud'}>
      <Typography TagType={'h3'} style={{ marginBottom: '1.75em' }}>
        Filter by hashtag
      </Typography>
      <ChipContainer>
        {hashTags.length > 0 &&
          hashTags.map((hashTag) => (
            <Chip
              hashTag={hashTag}
              key={`$tag-collection-chip-${StringService.toCSSName(
                hashTag.text
              )}`}
            />
          ))}
      </ChipContainer>
    </Box>
  );
};

export default HashTagCollection;
