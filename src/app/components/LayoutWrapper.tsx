"use client";

import React, { Fragment } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/store';

const LayoutWrapper = ({children}:{children: React.ReactNode}) => {
  return (
    <Fragment>
      <Provider store={store}>
      {children}
      </Provider>
      </Fragment>
  )
}

export default LayoutWrapper