import styled from '@emotion/styled';
import fonts from '../global/fonts';
import mediaQueries from '../global/mediaQueries';

const MainTitle = styled('h1')`
  margin: 100px 0;
  font-size: 45px;
  line-height: 1.33;
  letter-spacing: 21px;
  font-family: ${fonts.title};
  text-align: center;
  text-transform: uppercase;

  ${mediaQueries.mobile}{
    font-size: 24px;
    letter-spacing: 14px;
    margin: 48px 0 24px;
  }
`;

const TitleH2 = styled('h2')`
  position: relative;
  font-size: 48px;
  line-height: 64px;
  font-family: ${fonts.title};
  margin: 120px 0 85px 0;
  span {
    z-index: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -160px;
    font-size: 250px;
    color: white;
    text-shadow: -1px -1px 0 ${(props) => props.theme.colors.primary},
      1px -1px 0 ${(props) => props.theme.colors.primary}, -1px 1px 0 ${(props) => props.theme.colors.primary},
      1px 1px 0 ${(props) => props.theme.colors.primary};
    font-family: ${fonts.light};
    opacity: 0.2;
    ${mediaQueries.mobile}{
      left: -7px;
    }
  }
  ${mediaQueries.mobile}{
    margin: 24px 0 ;
    padding : 0 8px;
    font-size: 35px;
    line-height: 1.2;
  }
`;

const TitleH3 = styled('h3')`
  position: relative;
  margin: 64px 0 67px;
  font-size: 48px;
  font-family: ${fonts.title};
  line-height: 64px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -20px;
    width: 74px;
    height: 11px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const TitleH4 = styled('h4')`
  font-family: ${fonts.title};
  font-size: 32px;
  letter-spacing: -1px;

   ${mediaQueries.mobile}{
    margin-left: 8px;
    margin: 24px 0 16px 8px; 
   }
`;

export {
  MainTitle, TitleH2, TitleH3, TitleH4,
};
