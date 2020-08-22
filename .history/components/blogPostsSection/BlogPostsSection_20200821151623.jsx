import React from 'react';
import BlogPostsItem from './BlogPostsItem';
import classes from './blogPostsSection.module.css';

function BlogPostsSection() {
  return (
    <div className={classes.blogPostsSection}>
      <BlogPostsItem
        source="/811822-811249-pubg-2.jpg"
        title="کدام بازی تفنگی بهتری بازی است؟"
        date="3 بهمن، 1399"
      />
    </div>
  );
}

export default BlogPostsSection;
