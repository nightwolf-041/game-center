import React from 'react';
import classes from './blogPostsSection.module.css';

function BlogPostsItem() {
  return (
    <div className={classes.blogPostsItem}>
      <div className={classes.blogPostsItemImageBox}>
        <div className={classes.blogPostsItemImageBackdrop}></div>
        <img src="" alt="" className={classes.blogPostsItemImage} />
      </div>
      <h4 className={classes.blogPostsItemTitle}></h4>
      <div className={classes.blogPostsItemDivider}></div>
      <p className={classes.blogPostsItemDate}></p>
    </div>
  );
}

export default BlogPostsItem;
