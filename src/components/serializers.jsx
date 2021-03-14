/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import slugify from 'slugify';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import BasePortableText from '@sanity/block-content-to-react';
import { Link } from 'gatsby';
import CloakLink from './helpers/CloakLink';
import MainImage from './MainImage';

const Serializers = (tableOfContent = false, setTableOfContent = false) => {
  const configSlug = {
    replacement: '-', // replace spaces with replacement character, defaults to `-` // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: 'fr', // language code of the locale to use
  };

  const serializers = {
    types: {
      block: (props) => {
        const newTableOfContent = tableOfContent;
        if (props.node.style === 'h2') {
          let slug = '';
          if (typeof props.children[0] === 'string') {
            slug = props.children[0];
          }

          if (setTableOfContent && tableOfContent) {
            newTableOfContent.push({
              hn: 'h2',
              value: props.children[0],
            });
            setTableOfContent(newTableOfContent);
          }

          return (
            <h2
              id={slugify(slug.toString(), {
                replacement: '-', // replace spaces with replacement character, defaults to `-` // remove characters that match regex, defaults to `undefined`
                lower: true, // convert to lower case, defaults to `false`
                strict: true, // strip special characters except replacement, defaults to `false`
                locale: 'fr', // language code of the locale to use
              })}
            >
              {props.children}
            </h2>
          );
        }
        if (props.node.style === 'h3') {
          if (setTableOfContent && tableOfContent) {
            newTableOfContent.push({
              hn: 'h3',
              value: props.children[0],
            });
            setTableOfContent(newTableOfContent);
          }
          return (
            (typeof props.children[0] === 'string')
              ? (
                <h3 id={slugify(props.children[0].toString(), configSlug)}>
                  {props.children}
                </h3>
              )
              : (
                <h3 id="toto">
                  {props.children}
                </h3>
              )
          );
        }
        if (props.node.style === 'h4') {
          if (setTableOfContent && tableOfContent) {
            newTableOfContent.push({
              hn: 'h4',
              value: props.children[0],
            });
            setTableOfContent(newTableOfContent);
          }
          return (
            <h4 id={slugify(props.children[0].toString(), configSlug)}>
              {props.children}
            </h4>
          );
        }
        if (props.node.style === 'h5') {
          return (
            <h5 id={slugify(props.children[0].toString(), configSlug)}>
              {props.children}
            </h5>
          );
        }
        if (props.node.style === 'h6') {
          return (
            <h6 id={slugify(props.children[0].toString(), configSlug)}>
              {props.children}
            </h6>
          );
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
        const { slug } = mark.reference;
        const link = `/${slug.current}`;
        return <Link to={link}>{children}</Link>;
      },
      link: ({ mark, children }) => {
        const {
          blank, href, cloaked, sponsored, noreferrer, ugc,
        } = mark;
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
        }
        return (
          <a href={href} {...propsLink}>
            {children}
          </a>
        );
      },
    },
  };
  return serializers;
};

export default Serializers;
