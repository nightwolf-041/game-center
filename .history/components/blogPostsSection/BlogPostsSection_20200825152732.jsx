import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BlogPostsItem from './BlogPostsItem';
import Pagination from 'rc-pagination';
import classes from './blogPostsSection.module.css';

function BlogPostsSection() {
  let [posts, setPosts] = useState([]);
  let [getPostsStatuses, setGetPostsStatuses] = useState({
    loading: false,
    success: false,
    error: false,
  });
  let [currentPage, setCurrentPage] = useState(1);
  const paginationChangeHandler = (current, pageIndex) => {
    setCurrentPage(current);
  };

  useEffect(() => {
    setGetPostsStatuses({
      ...getPostsStatuses,
      loading: true,
      success: false,
      error: false,
    });
    axios
      .get(`http://185.211.56.9:5000/Post?page=${currentPage}&take=${9}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.succeeded === true) {
          setGetPostsStatuses({
            ...getPostsStatuses,
            loading: false,
            success: true,
            error: false,
          });
          // setPosts(res.data)
        } else {
          setGetPostsStatuses({
            ...getPostsStatuses,
            loading: false,
            success: false,
            error: true,
          });
        }
      })
      .catch((err) => {
        setGetPostsStatuses({
          ...getPostsStatuses,
          loading: false,
          success: false,
          error: true,
        });
      });
  }, [currentPage]);

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
        </div>
        <div className={classes.blogPostsSectionPaginationBox}>
          <Pagination
            className={classes.blogPostsSectionPagination}
            total={9}
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
