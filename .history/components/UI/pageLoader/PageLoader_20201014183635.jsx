import React from 'react';
import Spinner from '../spinner/Spinner';
import classes from './pageLoader.module.css';

function PageLoader() {
  return (
    <div className={classes.pageLoader}>
      <Spinner />
    </div>
  );
}

export default PageLoader;
