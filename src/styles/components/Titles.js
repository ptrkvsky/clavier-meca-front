import styled from '@emotion/styled';
import theme from '../global/theme';

const TitleH2 = styled('h2')`
  position: relative;
  font-size: 48px;
  line-height: 64px;
  font-family: ${theme.fonts.title};
  margin: 120px 0 85px 0;
  span {
    z-index: -1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -160px;
    font-size: 250px;
    color: white;
    text-shadow: -1px -1px 0 ${theme.colors.primary},
      1px -1px 0 ${theme.colors.primary}, -1px 1px 0 ${theme.colors.primary},
      1px 1px 0 ${theme.colors.primary};
    font-family: ${theme.fonts.light};
    opacity: 0.2;
  }
`;

const TitleH3 = styled('h3')`
  position: relative;
  margin: 64px 0 67px;
  font-size: 48px;
  font-family: ${theme.fonts.title};
  line-height: 64px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -20px;
    width: 74px;
    height: 11px;
    background-color: ${theme.colors.primary};
  }
`;

const TitleH4 = styled('h4')`
  font-family: ${theme.fonts.title};
  font-size: 32px;
`;

export { TitleH2, TitleH3, TitleH4 };
