import React from 'react';
import slugify from 'slugify';

const TableOfContentListItem = ({ item }) => {
  const link = slugify(item.value, {
    replacement: '-', // replace spaces with replacement character, defaults to `-` // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'fr', // language code of the locale to use
  });

  return (
    <li>
      <a href={`#${link}`} title={item.value}>
        {item.value}
      </a>
    </li>
  );
};

export default TableOfContentListItem;
