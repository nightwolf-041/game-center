import React from 'react';
import Link from 'next/link';
import classes from './blogPostsSection.module.css';

// as={`/blog/${dt.title.replace(/ /g, '-')}/${dt.categoryGuid}`}

function BlogPostsItem(props) {
  return (
    <div className={classes.blogPostsItem}>
      <Link href={`/[...slug].js`} as={`/blog/test-name`}>
        <div className={classes.blogPostsItemImageBox}>
          <div className={classes.blogPostsItemImageBackdrop}></div>
          <img
            src={props.source}
            alt=""
            className={classes.blogPostsItemImage}
          />
        </div>
      </Link>
      <div className={classes.blogPostsItemTitleBox}>
        <h4 className={classes.blogPostsItemTitle}>{props.title}</h4>
      </div>
      <div className={classes.blogPostsItemDivider}></div>
      <p className={classes.blogPostsItemDate}>{props.date}</p>
    </div>
  );
}

export default BlogPostsItem;