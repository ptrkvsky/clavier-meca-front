import styled from '@emotion/styled';
import theme from '../global/theme';
import mediaQueries from '../global/mediaQueries';

const DefaultLayout = styled('div')`
  width: ${theme.maxWidth};
  max-width: 100%;
  margin: 0 auto;
  ${mediaQueries.tabletLandscape} {
    width: 100%;
  }
`;

export { DefaultLayout };
