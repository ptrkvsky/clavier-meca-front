import PropTypes from 'prop-types';
import React from 'react';

import { TitleH2 } from '../../styles/components/Titles';
import { TableWrapper, Table, Section } from '../../styles/components/keyboard/keyboardTable';
import PortableText from '../portableText';
import KeyboardContainer from './KeyboardContainer';
import KeyboardTableItem from './KeyboardTableItem';

const KeyboardTable = ({
  keyboards,
  _rawDescription,
  hn,
  title,
  keyboardsAmazon,
}) => (
  <Section className="table-keybboard numberh2">
    <TitleH2 as={hn}>{title}</TitleH2>
    <div className="table-desc">
      <PortableText blocks={_rawDescription} />
    </div>
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
  </Section>
);

KeyboardTable.propTypes = {
  _rawDescription: PropTypes.array.isRequired,
  hn: PropTypes.string.isRequired,
  keyboards: PropTypes.array.isRequired,
  keyboardsAmazon: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default KeyboardTable;
