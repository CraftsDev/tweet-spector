import { HashTag } from '../../services/api/Twitter/TwitterResponseObjects';
import Box from '../box';
import { Chip, ChipContainer } from '../chip';
import Typography from '../typography';

export const FakeHashTagCollection = () => {
  // const viewportWidth = useViewportWidth();
  return (
    <Box style={{ width: 'auto' }} className={'hash-cloud'}>
      <Typography TagType={'h4'} style={{ marginBottom: '1.75em' }}>
        Filter by hashtag
      </Typography>
      <ChipContainer>
        <Chip hashTag={{ text: '#coding', indices: [4] } as HashTag} />
        <Chip hashTag={{ text: '#Python', indices: [2] } as HashTag} />
        <Chip hashTag={{ text: '#ComputerScience', indices: [1] } as HashTag} />
      </ChipContainer>
    </Box>
  );
};
