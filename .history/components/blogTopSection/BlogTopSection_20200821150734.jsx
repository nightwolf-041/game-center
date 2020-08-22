import React from 'react';
import classes from './blogTopSection.module.css';

function BlogTopSection() {
  return (
    <div className={classes.blogTopSection}>
      <div className={classes.blogTopBackdrop}></div>
      <h1 className={classes.blogTopTitle}>آرشیو بلاگ</h1>
    </div>
  );
}

export default BlogTopSection;
