import React, { useRef, useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';

function TopSlider() {
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <Swiper {...params}>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          dicta necessitatibus perspiciatis optio fugiat in esse delectus non
          cumque possimus perferendis, id laudantium iure repellendus ipsa
          explicabo cupiditate nam deserunt voluptates molestiae quae similique
          numquam vel ea? Dolor, perspiciatis architecto!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          dicta necessitatibus perspiciatis optio fugiat in esse delectus non
          cumque possimus perferendis, id laudantium iure repellendus ipsa
          explicabo cupiditate nam deserunt voluptates molestiae quae similique
          numquam vel ea? Dolor, perspiciatis architecto!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          dicta necessitatibus perspiciatis optio fugiat in esse delectus non
          cumque possimus perferendis, id laudantium iure repellendus ipsa
          explicabo cupiditate nam deserunt voluptates molestiae quae similique
          numquam vel ea? Dolor, perspiciatis architecto!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          dicta necessitatibus perspiciatis optio fugiat in esse delectus non
          cumque possimus perferendis, id laudantium iure repellendus ipsa
          explicabo cupiditate nam deserunt voluptates molestiae quae similique
          numquam vel ea? Dolor, perspiciatis architecto!
        </p>
      </div>
    </Swiper>
  );
}

export default TopSlider;
