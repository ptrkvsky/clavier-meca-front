import PropTypes from 'prop-types';
import React from 'react';
import Hero from '../Hero';
import Highlight from '../Highlight';
import KeyboardTable from '../keyboard/KeyboardTable';
import SwitchBlock from '../Switches/SwitchBlock';
import BodySection from '../BodySection';
import ProductsSection from '../ProductsSection';

const PostSlices = ({ content, setTableOfContent, tableOfContent }) => {
  const slices = content
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      console.info(c._type);
      switch (c._type) {
        case 'hero':
          el = <Hero key={c._key} {...c} />;
          break;
        case 'highlight':
          el = <Highlight key={c._key} {...c} />;
          break;
        case 'keyboardsTable':
          el = <KeyboardTable key={c._key} {...c} />;
          break;
        case 'switchBlock':
          el = (
            <SwitchBlock
              key={c._key}
              tableOfContent={tableOfContent}
              setTableOfContent={setTableOfContent}
              {...c}
            />
          );
          break;
        case 'bodySection':
          el = (
            <BodySection
              key={c._key}
              tableOfContent={tableOfContent}
              setTableOfContent={setTableOfContent}
              {...c}
            />
          );
          break;
        case 'productsSection':
          el = <ProductsSection key={c._key} {...c} />;
          break;
        default:
          el = null;
      }
      return el;
    });
  return slices;
};

PostSlices.propTypes = {
  content: PropTypes.array.isRequired,
  setTableOfContent: PropTypes.func.isRequired,
  tableOfContent: PropTypes.array.isRequired,
};

export default PostSlices;
