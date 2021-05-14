import React, { Dispatch } from 'react';
import { useReducer } from 'react';
import styled from 'styled-components';
import AppReducer, { AppActions, initialState } from '../../reducers';
import { getSize } from '../../services/screen/ScreenService';
import variables from '../../shared/variables';
import Box from '../box';
import useViewportWidth from '../hooks/useViewportWidth';
import SearchTweets from '../searchTweets';
import Typography from '../typography';

/* Cover Background */
const StyledDiv = styled.div`
  min-height: 100%;
  background-color: ${variables.ThemeColors.main.background};
`;

export const AppStoreStateContext = React.createContext(initialState);
export const AppStoreDispatchContext = React.createContext(
  Function.prototype as Dispatch<AppActions>
);

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const viewportWidth = useViewportWidth();
  const isMobile = viewportWidth <= 820;

  return (
    <AppStoreStateContext.Provider value={state}>
      <AppStoreDispatchContext.Provider value={dispatch}>
        <StyledDiv>
          <Box
            backgroundColor={'transparent'}
            shadow={false}
            padding={isMobile ? '10px 10px 0' : '10px 30px 0'}
            style={{
              width: '1024px',
              maxWidth: '100%',
              minWidth: getSize('1024px', isMobile),
            }}
          >
            <Typography TagType={'h2'}>Tweet Feed</Typography>
          </Box>
          <SearchTweets isMobile={isMobile} />
        </StyledDiv>
      </AppStoreDispatchContext.Provider>
    </AppStoreStateContext.Provider>
  );
};
export default App;
