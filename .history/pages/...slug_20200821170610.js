import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Page2Navbar from '../../components/page2/page2Navbar/Page2Navbar';
import Page2TopPage from '../../components/page2/page2TopPage/Page2TopPage';
import CategoriesPage from '../../components/page2/categoriesPage/CategoriesPage';
import ContactUsPage from '../../components/contactUsPage/ContactUsPage';
import Footer from '../../components/footer/Footer';
import Page2PlusIocn from '../../components/page2/page2PlusIocn/Page2PlusIocn';
import OrderCreateModal from '../../components/UI/orderCreateModal/OrderCreateModal';

const page2 = (props) => {
  console.log(props.data);

  const router = useRouter();
  const givenTitle = router.query.slug[0];
  let rgxedTitle = givenTitle.replace(/-/g, ' ');
  const description = props.categoryData.description;

  let [hamburgerToggler, setHamburgerToggler] = useState(false);
  let [orderCreateModalHidden, setOrderCreateModalHidden] = useState(true);

  const hamburgerToggleHandler = () => {
    setHamburgerToggler((hamburgerToggler) => !hamburgerToggler);
  };

  let ogData = { ...props.categoryData };
  let ogCoverDoc = { ...ogData.coverDocument }.source;

  const showOrderCreateHandler = () => {
    setOrderCreateModalHidden(false);
  };

  const hideOrderCreateModal = () => {
    setOrderCreateModalHidden(true);
  };

  return (
    <>
      <Head>
        <title>پیشه پلاس | {rgxedTitle}</title>
        <meta name="description" content="سایت رسمی پیشه پلاس" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogCoverDoc} />
        <meta property="og:title" content={rgxedTitle} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page2Navbar />

      <Page2TopPage
        givenTitle={givenTitle}
        categoryInfo={props.categoryData}
        data={props.data}
      />

      <CategoriesPage
        givenTitle={givenTitle}
        categoryInfo={props.categoryData}
        data={props.data}
        description={description}
        // givenGuid={givenGuid}
      />

      <ContactUsPage />
      <Footer indexPage={false} />

      <Page2PlusIocn showOrderCreate={showOrderCreateHandler} />

      <OrderCreateModal
        hidden={orderCreateModalHidden}
        orderCreateModalLabel={rgxedTitle}
        hideOrderCreateModal={hideOrderCreateModal}
      />
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
