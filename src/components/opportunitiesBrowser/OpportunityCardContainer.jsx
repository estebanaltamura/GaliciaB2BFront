import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './opportunityCardContainer.css';
import { useEffect } from 'react';
import { OpportunityCard } from './OpportunityCard';

export const OpportunityCardContainer = ({ value, index, data }) => {
  useEffect(() => {
    console.log(data?.ofertas);
  }, [data]);
  return (
    <div
      className='opportunityCard'
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {data === null || data?.ofertas === undefined ? (
        'Is loading'
      ) : data.ofertas.length === 0 ? (
        'No results'
      ) : (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          className='mySwiper'
        >
          {data.ofertas.map((opportunityData, index) => (
            <SwiperSlide key={index}>
              <OpportunityCard data={opportunityData} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
