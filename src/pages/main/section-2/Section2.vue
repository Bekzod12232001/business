<template>
 <main>
  <section class="section2">
    <div class="container">
      <h2 class="section2-title">{{ $t('Visa') }}</h2>
      <p class="section2-text">{{ $t('Experience') }}</p>
      <p class="section2-text">{{ $t('seamless') }}</p>
      <p class="section2-text">{{ $t('journey') }}</p>
      <swiper
      loop="true"
      :slidesPerView="3"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    :breakpoints="breakpoints"
      >
        <swiper-slide>
          <div class="slide-img__info">
            <img class="japan-img" src="@/assets/images/japan.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('Japan') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title benefist">{{ $t('Benefits') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/scriptka.png" alt="">
                <p class="deal-avto__text">{{ $t('Best') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air time" src="@/assets/images/time.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Short') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/true.png" alt="">
                <p class="deal-avto__text ">{{ $t('Trustworthy') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-img__info">
            <img class="japan-img" src="@/assets/images/india.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('India') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title benefist">{{ $t('Benefits') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/scriptka.png" alt="">
                <p class="deal-avto__text">{{ $t('Best') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air time" src="@/assets/images/time.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Short') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/true.png" alt="">
                <p class="deal-avto__text ">{{ $t('Trustworthy') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-img__info">
            <img class="japan-img" src="@/assets/images/saudi.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('SaudiArabia') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title benefist">{{ $t('Benefits') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/scriptka.png" alt="">
                <p class="deal-avto__text">{{ $t('Best') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air time" src="@/assets/images/time.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Short') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/true.png" alt="">
                <p class="deal-avto__text ">{{ $t('Trustworthy') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-img__info">
            <img class="japan-img" src="@/assets/images/honkong.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>{{ $t('HongKong') }}</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title benefist">{{ $t('Benefits') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/scriptka.png" alt="">
                <p class="deal-avto__text">{{ $t('Best') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air time" src="@/assets/images/time.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Short') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/true.png" alt="">
                <p class="deal-avto__text ">{{ $t('Trustworthy') }}</p>
              </div>
            </div>
            <a href="#" class="checkins-href">{{ $t('Make') }}</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-img__info">
            <img class="japan-img" src="@/assets/images/china.jpg" alt="">
            <div class="info">
              <div class="info__title-price">
                <h2>China</h2>
                <div class="checkins">
                  <img class="man-icon" src="@/assets/images/man.png" alt="">
                  <p class="checkins-number">{{ $t('check') }}</p>
                </div>
              </div>
              <div class="deal__includes">
              <h3 class="deal-includes__title benefist">{{ $t('Benefits') }}</h3>
              <div class="deal-avto">
                <img class="deal-avto__img" src="@/assets/images/scriptka.png" alt="">
                <p class="deal-avto__text">{{ $t('Best') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img air time" src="@/assets/images/time.svg" alt="">
                <p class="deal-avto__text ">{{ $t('Short') }}</p>
              </div>
              <div class="deal-avto">
                <img class="deal-avto__img " src="@/assets/images/true.png" alt="">
                <p class="deal-avto__text ">{{ $t('Trustworthy') }}</p>
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
