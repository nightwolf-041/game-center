import React from 'react';
import BlogPostsItem from './BlogPostsItem';
import classes from './blogPostsSection.module.css';

function BlogPostsSection() {
  return (
    <div className={classes.blogPostsSection}>
      <div className={classes.blogPostsItemsBox}>
        <div className="container"></div>
        <BlogPostsItem
          source="/811822-811249-pubg-2.jpg"
          title="کدام بازی تفنگی بهتری بازی است؟"
          date="3 بهمن، 1399"
        />
        <BlogPostsItem
          source="/811822-811249-pubg-2.jpg"
          title="کدام بازی تفنگی بهتری بازی است؟"
          date="3 بهمن، 1399"
        />
        <BlogPostsItem
          source="/811822-811249-pubg-2.jpg"
          title="کدام بازی تفنگی بهتری بازی است؟"
          date="3 بهمن، 1399"
        />
        <BlogPostsItem
          source="/811822-811249-pubg-2.jpg"
          title="کدام بازی تفنگی بهتری بازی است؟"
          date="3 بهمن، 1399"
        />
      </div>
    </div>
  );
}

export default BlogPostsSection;
