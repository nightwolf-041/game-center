import React from 'react';
import BlogPostsItem from './BlogPostsItem';
import classes from './blogPostsSection.module.css';

function BlogPostsSection() {
  return (
    <div className={classes.blogPostsSection}>
      <div className="container">
        <div className={classes.blogPostsItemsBox}>
          <BlogPostsItem
            source="/811822-811249-pubg-2.jpg"
            title="کدام بازی تفنگی بهتری بازی است؟"
            date="3 بهمن، 1399"
          />
          <BlogPostsItem
            source="/call_of_duty_black_ops_2_video_game-HD-1280x640.jpg"
            title="کدام بازی تفنگی بهتری بازی است؟"
            date="3 بهمن، 1399"
          />
          <BlogPostsItem
            source="/3-32183_tom-clancy-s-the-division-season-pass-game.jpg"
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
    </div>
  );
}

export default BlogPostsSection;
