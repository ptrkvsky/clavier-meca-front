import React from 'react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import BasePortableText from '@sanity/block-content-to-react';
import CloakLink from '../components/helpers/CloakLink';
import slugify from './helpers/slugify';
import MainImage from './MainImage';

const renderLink = (isVisible, url) => {
  if (isVisible) {
    return (
      <PrimaryButton as="a" href={url} target="_blank" rel="noopener">
        Voir l'offre
      </PrimaryButton>
    );
  }
  return <PrimaryButton as="span">Voir l'offre</PrimaryButton>;
};

const serializers = (tableOfContent = false, setTableOfContent = false) => {
  const serializers = {
    types: {
      block: props => {
        const newTableOfContent = tableOfContent;

        if (props.node.style === 'h2') {
          if (setTableOfContent && tableOfContent) {
            newTableOfContent.push({
              hn: 'h2',
              value: props.children[0],
            });
            setTableOfContent(newTableOfContent);
          }
          return <h2 id={slugify(props.children)}>{props.children}</h2>;
        }
        if (props.node.style === 'h3') {
          if (setTableOfContent && tableOfContent) {
            newTableOfContent.push({
              hn: 'h3',
              value: props.children[0],
            });
            setTableOfContent(newTableOfContent);
          }
          return <h3 id={slugify(props.children)}>{props.children}</h3>;
        }
        if (props.node.style === 'h4') {
          if (setTableOfContent && tableOfContent) {
            newTableOfContent.push({
              hn: 'h4',
              value: props.children[0],
            });
            setTableOfContent(newTableOfContent);
          }
          return <h4 id={slugify(props.children)}>{props.children}</h4>;
        }
        if (props.node.style === 'h5') {
          return <h5 id={slugify(props.children)}>{props.children}</h5>;
        }
        if (props.node.style === 'h6') {
          return <h6 id={slugify(props.children)}>{props.children}</h6>;
        }

        return BasePortableText.defaultSerializers.types.block(props);
      },
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
  return serializers;
};

export default serializers;
