import React from 'react';
import { Global, css } from '@emotion/react';
import SuisseRegular from '../../assets/fonts/swissintl/swiss-intel-regular.woff2';
import SuisseBold from '../../assets/fonts/swissintl/swiss-intel-bold.woff2';
import SuisseLight from '../../assets/fonts/swissintl/swiss-intel-light.woff2';
import theme from './theme';
import mediaQueries from './mediaQueries';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        /* FONTS */
        @font-face {
          font-family: 'Suisse-regular';
          src: url(${SuisseRegular});
          font-display: swap;
        }
        @font-face {
          font-family: 'Suisse-bold';
          src: url(${SuisseBold});
          font-display: swap;
        }
        @font-face {
          font-family: 'Suisse-light';
          src: url(${SuisseLight});
          font-display: swap;
        }

        body {
          background: ${theme.bg.main};
          color: ${theme.colors.main};

          font-family: ${theme.fonts.main};
          font-size: 0.972vw;
          font-size: clamp(1.2rem, 0.972vw, 2.8rem);
          font-style: normal;

          letter-spacing: 0.02em;

          ${mediaQueries.tabletLandscape} {
          }

          ${mediaQueries.mobile} {
            /* font-size: 3.889vw;
            line-height: 5.833vw; */
          }
        }

        strong {
          font-family: ${theme.fonts.title};
          font-size: 1.05em;
          color: ${theme.colors.primary};
        }

        a,
        .daclok {
          text-decoration-color: ${theme.colors.primary};
          text-decoration-thickness: 0.125em;
          text-underline-offset: 0.125em;
        }

        /*Gatsby transition */
        .tl-edges {
          overflow-x: initial;
        }

        /* HELPERS */
        .max-container {
          max-width: ${theme.maxWidth};
          margin-left: auto;
          margin-right: auto;
          ${mediaQueries.tabletLandscape} {
            width: 100%;
            padding: 0 5%;
          }
        }

        .d-block {
          display: block;
        }

        .v-hidden {
          visibility: hidden;
        }

        .o-hidden {
          overflow: hidden;
        }

        .hide-text {
          display: block;
          overflow: hidden;
          line-height: 1;
        }

        .clr-second {
          color: ${theme.colors.secondary};
        }
      `}
    />
  );
}
