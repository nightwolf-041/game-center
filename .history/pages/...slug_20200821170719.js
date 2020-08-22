import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header/Header';

const Posts = (props) => {
  return (
    <>
      <Head>
        <title>گیم سنتر | وبلاگ</title>
        <meta name="description" content="وبلاگ رسمی گیم سنتر" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://amp.express.de/image/31959278/2x1/600/300/1593dd0d21ba8f433c5dbbdba00a6724/yg/zocken-symbol-30012018.jpg"
        />
        <meta property="og:title" content="وبلاگ گیم سنتر" />
        <meta
          property="og:description"
          content="با ما از بازی کردن بازی مورد علاقه خود درآمد زایی کنید"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        blogHeader={true}
        showLoginRegisterModal={showLoginRegisterModalHandler}
      />
      <Footer blogHeader={true} />
    </>
  );
};

// Posts.getInitialProps = async ({query}) => {
//   const { slug } = query

//   const res = await axios.get(`http://185.211.59.237/Category/GetPrimaries?guid=${slug[1]}`)
//   const bigData = await res.data
//   const data = await res.data.primaryCategories
//   // axiosConfig.get('/Category/' + guid, {
//   const currentData = await axios.get(`http://185.211.59.237/Category/${slug[1]}?includeChildren=false`)
//   const currentDataBigData = await currentData.data
//   const categoryData = await currentData.data.category

//   return { data, bigData, categoryData }
// }

export default Posts;
