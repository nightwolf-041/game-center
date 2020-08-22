import React, { useEffect, useState } from 'react';
import BlogPostsItem from './BlogPostsItem';
import Pagination from 'rc-pagination';
import classes from './blogPostsSection.module.css';

function BlogPostsSection() {
  let [currentPage, setCurrentPage] = useState(1);
  const paginationChangeHandler = (current, pageIndex) => {
    setCurrentPage(current);
  };

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
            source="/Feature-Best-Hotels-for-Gamers-By-Vanguardia.jpg"
            title="کدام بازی تفنگی بهتری بازی است؟"
            date="3 بهمن، 1399"
          />
        </div>
        <div className={classes.blogPostsSectionPaginationBox}>
          <Pagination
            className={classes.blogPostsSectionPagination}
            total={8}
            defaultCurrent={1}
            current={currentPage}
            defaultPageSize={24}
            showTitle={false}
            showLessItems={true}
            onChange={(current, pageIndex) =>
              paginationChangeHandler(current, pageIndex)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPostsSection;
