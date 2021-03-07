import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import { TitleH2 } from '../../styles/components/Titles';
import fonts from '../../styles/global/fonts';
import mediaQueries from '../../styles/global/mediaQueries';
import PortableText from '../portableText';
import KeyboardContainer from './KeyboardContainer';
import KeyboardTableItem from './KeyboardTableItem';

const TableWrapper = styled('div')` 
  ${mediaQueries.mobile}{
    max-width: 375px;
    overflow-x: auto;
    margin: 48px 0;
  }
`;
const Table = styled('table')`
  border-collapse: collapse;
  width: 100%;
  margin: 114px 0;
  ${mediaQueries.mobile}{
    margin: 0;
  }
  thead {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.revert};
    font-size: 24px;
    font-family: ${fonts.title};
    text-transform: uppercase;
    th {
      height: 52px;
    }
    .pos {
      padding: 0 35px;
    }
  }
  tbody {
    tr {
      &:nth-child(odd) {
        background-color: ${(props) => props.theme.colors.border};
      }
      &:nth-child(1) {
        .pos {
          font-size: 36px;
          color: ${(props) => props.theme.colors.primary};
        }
      }
      &:nth-child(2) {
        .pos {
          font-size: 34px;
        }
      }
    }
    .pos {
      font-size: 32px;
      font-family: ${fonts.title};
      .marker {
        font-size: 24px;
      }
    }
    .cell {
      text-align: center;
    }
    .pos {
    }
    .name {
      font-size: 24px;
      font-family: ${fonts.title};
    }
    .photo {
      font-size: 0;
    }
    .price {
      font-size: 24px;
      font-family: ${fonts.light};
      .currency {
        font-size: 18px;
      }
    }
  }
`;

const KeyboardTable = ({
  keyboards,
  _rawDescription,
  hn,
  title,
  keyboardsAmazon,
}) => (
  <section className="numberh2">
    <TitleH2 as={hn}>{title}</TitleH2>
    <PortableText blocks={_rawDescription} />
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th className="pos">#</th>
            <th className="photo">photo</th>
            <th className="nom">nom</th>
            <th className="prix">prix</th>
            <th className="offre">offre</th>
          </tr>
        </thead>
        <tbody>
          {keyboards.map((keyboard, index) => (
            <KeyboardContainer
              key={keyboard.keyboard._id}
              position={index + 1}
              keyboard={keyboard.keyboard}
              keyboardsAmazon={keyboardsAmazon}
              renderComponent={KeyboardTableItem}
            />
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  </section>
);

KeyboardTable.propTypes = {
  _rawDescription: PropTypes.array.isRequired,
  hn: PropTypes.string.isRequired,
  keyboards: PropTypes.array.isRequired,
  keyboardsAmazon: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default KeyboardTable;
