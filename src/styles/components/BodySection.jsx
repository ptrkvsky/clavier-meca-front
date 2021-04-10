import styled from '@emotion/styled';
import quote from '../../assets/images/chevron.svg';
import mediaQueries from '../global/mediaQueries';

const BodySectionStyled = styled('section')`
  max-width: ${props => props.theme.contentWidth};
  margin: 0 auto;
  font-size: 18px;
  line-height: 24px;

  ${mediaQueries.mobile} {
    padding: 0 8px;
  }

  blockquote {
    position: relative;
    padding: 54px 0 54px 98px;
    font-size: 32px;
    line-height: 44px;
    font-family: ${props => props.theme.fonts.light};

    ${mediaQueries.mobile} {
      padding: 12px 0 12px 24px;
      margin: 0 0 0 22px;
      font-size: 30px;
      line-height: 42px;
    }

    &:before {
      content: url('${quote}');
      position: absolute;
      top: 54px;
      left: 34px;
      position: absolute;

      ${mediaQueries.mobile} {
        top: 12px;
        left: -30px;
      }
    }
  }
  h2 {
    position: relative;
    font-size: 48px;
    line-height: 64px;
    font-family: ${props => props.theme.fonts.title};
    margin: 120px 0 85px 0;
    ${mediaQueries.mobile} {
      margin: 48px 0 24px 0;
      margin: 48px 0 24px 0;
      line-height: 1.2;
      font-size: 38px;
    }
    span {
      z-index: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -160px;
      font-size: 250px;
      color: white;
      text-shadow: -1px -1px 0 ${props => props.theme.colors.primary},
        1px -1px 0 ${props => props.theme.colors.primary},
        -1px 1px 0 ${props => props.theme.colors.primary},
        1px 1px 0 ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.fonts.light};
      opacity: 0.2;
      ${mediaQueries.mobile} {
        left: 0;
      }
    }
  }

  h3 {
    position: relative;
    margin: 64px 0 67px;
    font-size: 48px;
    font-family: ${props => props.theme.fonts.title};
    line-height: 64px;
    ${mediaQueries.mobile} {
      margin: 24px 0 32px 0;
      font-size: 30px;
      line-height: 1.2;
      text-overflow: ellipsis;
    }
    ${mediaQueries.miniMobile} {
      white-space: nowrap;
      overflow: hidden;
      max-width: 360px;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -20px;
      width: 74px;
      height: 11px;
      background-color: ${props => props.theme.colors.primary};
    }
  }

  h4 {
    font-family: ${props => props.theme.fonts.title};
    font-size: 32px;
    line-height: 1.2;
  }
`;

export default BodySectionStyled;
