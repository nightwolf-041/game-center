import React from 'react';
import Link from 'next/link';
import classes from './blogPostsSection.module.css';

function BlogPostsItem(props) {
  return (
    <div className={classes.blogPostsItem}>
      <Link
        href={`/category/[...slug].js`}
        as={`/category/${dt.title.replace(/ /g, '-')}/${dt.categoryGuid}`}
      >
        <a className={classes.servicesPageSliderBottomCardButton}>جزئیات</a>
      </Link>
      <div className={classes.blogPostsItemImageBox}>
        <div className={classes.blogPostsItemImageBackdrop}></div>
        <img src={props.source} alt="" className={classes.blogPostsItemImage} />
      </div>
      <div className={classes.blogPostsItemTitleBox}>
        <h4 className={classes.blogPostsItemTitle}>{props.title}</h4>
      </div>
      <div className={classes.blogPostsItemDivider}></div>
      <p className={classes.blogPostsItemDate}>{props.date}</p>
    </div>
  );
}

export default BlogPostsItem;
