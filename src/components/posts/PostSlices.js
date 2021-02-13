import React from 'react';
import Hero from '../Hero';
import Highlight from '../Highlight';
import SwitchBlock from '../Switches/SwitchBlock';
import BodySection from '../BodySection';
import ProductsSection from '../ProductsSection';

const PostSlices = ({ content }) => {
  const slices = content
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;

      switch (c._type) {
        case 'hero':
          el = <Hero key={c._key} {...c} />;
          break;
        case 'highlight':
          el = <Highlight key={c._key} {...c} />;
          break;
        case 'switchBlock':
          el = <SwitchBlock key={c._key} {...c} />;
          break;
        case 'bodySection':
          el = <BodySection key={c._key} {...c} />;
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

export default PostSlices;
