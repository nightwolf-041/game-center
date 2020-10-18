import React from 'react';
import Spinner from '..';
import classes from './pageLoader.module.css';

function PageLoader() {
  return (
    <div className={classes.pageLoader}>
      <Spinner />
    </div>
  );
}

export default PageLoader;
