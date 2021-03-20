import PropTypes from 'prop-types';
import React from 'react';
import slugify from 'slugify';
import styled from '@emotion/styled';

const LinkItem = styled('div')` 
  text-decoration: none;
  font-size: 16px;
`;

const TableOfContentListItem = ({ item }) => {
  const link = slugify(item.value, {
    replacement: '-', // replace spaces with replacement character, defaults to `-` // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'fr', // language code of the locale to use
  });

  return (
    <li>
      <LinkItem href={`#${link}`} title={item.value}>
        {item.value}
      </LinkItem>
    </li>
  );
};

TableOfContentListItem.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

export default TableOfContentListItem;
