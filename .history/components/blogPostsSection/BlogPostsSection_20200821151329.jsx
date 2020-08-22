import React from 'react';

function BlogPostsSection() {
  return (
    <div className={classes.blogPostsSection}>
      <div className={classes.blogPostsItem}>
        <div className={classes.blogPostsItemImageBox}>
          <div className={classes.blogPostsItemImageBackdrop}></div>
          <img src="" alt="" className={classes.blogPostsItemImage} />
        </div>
        <h4 className={classes.blogPostsItemTitle}></h4>
        <div className={classes.blogPostsItemDivider}></div>
        <p className={classes.blogPostsItemDate}></p>
      </div>
    </div>
  );
}

export default BlogPostsSection;
