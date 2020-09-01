import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import BlogPostsItem from './BlogPostsItem';
import Pagination from 'rc-pagination';
import classes from './blogPostsSection.module.css';

function BlogPostsSection() {
  let [posts, setPosts] = useState([]);
  let [currentPosts, setCurrentPosts] = useState([]);
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
      .get(`http://185.211.56.9:5000/Post`)
      .then((res) => {
        console.log(res.data);
        if (res.data.succeeded === true) {
          setGetPostsStatuses({
            ...getPostsStatuses,
            loading: false,
            success: true,
            error: false,
          });
          setPosts(res.data.posts);
          // toast(res.data.message, { type: toast.TYPE.ERROR });
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
  }, []);

  useEffect(() => {
    setGetPostsStatuses({
      ...getPostsStatuses,
      loading: true,
      success: false,
      error: false,
    });
    axios
      .get(`http://185.211.56.9:5000/Post?page=${currentPage}&take=9`)
      .then((res) => {
        console.log(res.data);
        if (res.data.succeeded === true) {
          setGetPostsStatuses({
            ...getPostsStatuses,
            loading: false,
            success: true,
            error: false,
          });
          setCurrentPosts(res.data.posts);
          // toast(res.data.message, { type: toast.TYPE.ERROR });
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
          {currentPosts.map((post, index) => (
            <BlogPostsItem
              key={index}
              source={posts.coverImagePath}
              title={posts.title}
              date={posts.captionDate}
            />
          ))}
        </div>
        <div className={classes.blogPostsSectionPaginationBox}>
          <Pagination
            className={classes.blogPostsSectionPagination}
            total={posts.length}
            defaultCurrent={1}
            current={currentPage}
            defaultPageSize={9}
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
