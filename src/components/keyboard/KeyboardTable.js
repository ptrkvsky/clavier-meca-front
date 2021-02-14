import React from 'react';
import styled from '@emotion/styled';
import KeyboardTableItem from './KeyboardTableItem';
import { TitleH2 } from '../../styles/components/Titles';
import theme from '../../styles/global/theme';

const Table = styled('table')`
  border-collapse: collapse;
  width: 100%;
  margin: 114px 0;
  thead {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.revert};
    font-size: 24px;
    font-family: ${theme.fonts.title};
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
        background-color: ${theme.colors.border};
      }
      &:nth-child(1) {
        .pos {
          font-size: 36px;
          color: ${theme.colors.primary};
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
      font-family: ${theme.fonts.title};
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
      font-family: ${theme.fonts.title};
    }
    .photo {
      font-size: 0;
    }
    .price {
      font-size: 24px;
      font-family: ${theme.fonts.light};
      .currency {
        font-size: 18px;
      }
    }
  }
`;

const KeyboardTable = ({ Hn, keyboards, title }) => {
  return (
    <section>
      <TitleH2 as={Hn}>{title}</TitleH2>
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
            <KeyboardTableItem
              key={keyboard.keyboard._id}
              position={index + 1}
              keyboard={keyboard.keyboard}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default KeyboardTable;
