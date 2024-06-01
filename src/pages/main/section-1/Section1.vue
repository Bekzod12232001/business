<template>
  <main>
    <section class="section1">
    <div class="container">
      <div class="section1-titles">
        <h2 class="section1-title">{{ $t('BestWeekly') }}</h2>
        <p class="section1-text">{{ $t('DiscoverTheBest') }}</p>
        <p class="section1-text">{{ $t('Immerse') }}</p>
        <p class="section1-text"></p>
      </div>
      <swiper
      :loop="true"
      :slidesPerView="3"
    :centeredSlides="true"
    :spaceBetween="30"
    :grabCursor="true"
    :breakpoints="breakpoints"
  
    :pagination="{
      clickable: true,
    }"
    

    :modules="modules"
    class="mySwiper"
    >
        <swiper-slide>
          <div class="slide-img__info">
            <img class="england-img" src="@/assets/images/england.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('England') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title">{{ $t('Deal') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/avto.png" alt="">
                <p class="deal-avto__text">{{$t('hotel')}}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air" src="@/assets/images/air.jpg" alt="">
                <p class="deal-avto__text ">{{ $t('Airplane') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/hotel.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Daily') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide><div class="slide-img__info">
            <img class="england-img" src="@/assets/images/istan.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('Istanbul') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title">{{ $t('Deal') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/avto.png" alt="">
                <p class="deal-avto__text">{{ $t('hotel') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air" src="@/assets/images/air.jpg" alt="">
                <p class="deal-avto__text ">{{ $t('Airplane') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/hotel.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Daily') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div></swiper-slide>
        <swiper-slide>
          <div class="slide-img__info">
            <img class="england-img" src="@/assets/images/canada.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('Canada') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title">{{ $t('Deal') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/avto.png" alt="">
                <p class="deal-avto__text">{{ $t('hotel') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air" src="@/assets/images/air.jpg" alt="">
                <p class="deal-avto__text ">{{ $t('Airplane') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/hotel.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Daily') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-img__info">
            <img class="england-img" src="@/assets/images/antalya.webp" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('Antalya') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title">{{ $t('Deal') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/avto.png" alt="">
                <p class="deal-avto__text">{{ $t('hotel') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air" src="@/assets/images/air.jpg" alt="">
                <p class="deal-avto__text ">{{ $t('Airplane') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/hotel.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Daily') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  </main>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  
const breakpoints={
      '400': {
        slidesPerView: 1,
        spaceBetween: 0,  
      },  
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      '1240': {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      '1440': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
</script>
