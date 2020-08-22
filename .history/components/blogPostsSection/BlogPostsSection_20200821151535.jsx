import React from 'react';
import BlogPostsItem from './BlogPostsItem';
import classes from './blogPostsSection.module.css';

function BlogPostsSection() {
  return (
    <div className={classes.blogPostsSection}>
      <BlogPostsItem source="/" title="" date="" />
    </div>
  );
}

export default BlogPostsSection;
