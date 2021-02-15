import styled from '@emotion/styled';
import theme from '../global/theme';

const PrimaryButton = styled('button')`
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-family: ${theme.fonts.title};
  text-align: center;
  text-transform: uppercase;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.revert};
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.1s linear;
  &:hover {
    box-shadow: 0px 4px 9px rgba(128, 0, 255, 0.25);
  }
`;

export { PrimaryButton };
