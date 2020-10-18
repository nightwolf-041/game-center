import React from 'react';
import Spinner from '../spinner/Spinner';
import classes from './pageLoader.module.css';

function PageLoader({ loading }) {
  return (
    <div className={loading ? classes.pageLoader : classes.pageLoaderHidden}>
      {loading && <Spinner />}
    </div>
  );
}

export default PageLoader;
