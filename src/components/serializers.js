import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import CloakLink from '../components/helpers/CloakLink';

import MainImage from './MainImage';

const renderLink = (isVisible, url) => {
  if (isVisible) {
    return (
      <PrimaryButton as="a" href={url} target="_blank">
        Amazon
      </PrimaryButton>
    );
  }
  return <PrimaryButton as="span">Amazon</PrimaryButton>;
};

const serializers = {
  types: {
    link: ({ node }) => <div>link</div>,
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      console.info('internal');
      const { slug = {} } = mark;
      const href = `/${slug.current}`;
      return <a href={href}>{children}</a>;
    },
    link: ({ mark, children }) => {
      const { blank, href, cloaked, sponsored, noreferrer, ugc } = mark;
      const propsLink = {
        rel: ' ',
      };

      if (blank) {
        propsLink.target = '_blank';
        propsLink.rel += 'noopener noreferrer';
      }

      if (sponsored) {
        propsLink.rel += ' sponsored';
      }

      if (noreferrer) {
        propsLink.rel += ' noreferrer';
      }

      if (ugc) {
        propsLink.rel += ' ugc';
      }

      if (cloaked) {
        return <CloakLink url={href} content={children} />;
      } else {
        return (
          <a href={href} {...propsLink}>
            {children}
          </a>
        );
      }
    },
  },
};

export default serializers;
