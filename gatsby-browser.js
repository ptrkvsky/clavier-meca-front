/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { GlobalProvider} from "./src/context/globalContext"
import Layout from './src/components/general/Layout';


const wrapPageElement = ({ element, props }) => (
  <GlobalProvider>
    <Layout {...props}>{element}</Layout>
  </GlobalProvider>
);

export { wrapPageElement };
