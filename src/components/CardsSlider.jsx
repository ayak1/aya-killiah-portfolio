// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,EffectCards,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
export default () => {
  const Certificates =[
    {url:"images/coursera HTML and CSS in depth.png",alt:""},
    {url:"images/UI & UX.png",alt:""},
    {url:"images/Coursera programming with js.png",alt:""},
    {url:"images/focalX_internship.png",alt:""},
    {url:"images/coursera version control.png",alt:""},
    {url:"images/take_the_lead.png",alt:""}
  ]
  return (
    <Swiper className='w-[100%]'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectCards,Autoplay]}
      effect='Cards'
    //   spaceBetween={50}
      breakpoints={{
        // when window width is >= 320px
        320:{
          slidesPerView: 1,
          spaceBetween: 24
        },
        // when window width is >= 480px
        480:{
          slidesPerView: 2,
          spaceBetween: 24
        },
        // when window width is >= 640px
        640:{
          slidesPerView: 3,
          spaceBetween: 24
        }
      }}
      navigation
      autoplay={{delay: 2000}}  
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {Certificates.map((certifecate, index) => (
             <SwiperSlide key={index}>
                <img src={certifecate.url} alt={certifecate.alt} className='w-[30%-48px/3] md:w-[50%-12px] h-[318px] mb-10 bg-slate-800'/>
              </SwiperSlide>
        ))}
      
    </Swiper>
  );
};