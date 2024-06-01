<template>
<header>
  <div class="container">
    <div class="header__swiper">
    <swiper  class="swiper" loop="true" :modules="modules" 
    :autoplay="{
      delay: 2500, 
    }">
      <swiper-slide class="swiper-slide slide1">
       
        <div class="swiper-texts">
        <p class="slide-text">{{ $t('Take') }}</p>
        <h2 class="slide-title">{{ $t('Istanbul') }}</h2>
        <a href="#" class="slide-href">{{ $t('Go') }}</a>
      </div>
      <div class="swiper-info">
        <div class="population">
          <img class="population-img" src="@/assets/images/population.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('population') }}</h3>
            <p class="population-number">44.48 M</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/globos-blue.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('Territory') }}</h3>
            <p class="population-number">275.400 KM2</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/home.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('AVG') }}</h3>
            <p class="population-number">$946.000</p>
          </div>
        </div>
        <a href="#" class="population-href">{{ $t('ExploreMore') }}</a>
      </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide2">
        <div class="swiper-texts">
        <p class="slide-text">{{ $t('Take') }}</p>
        <h2 class="slide-title">{{ $t('Antalya') }}</h2>
        <a href="#" class="slide-href">{{ $t('Go') }}</a>
      </div>
      <div class="swiper-info">
        <div class="population">
          <img class="population-img" src="@/assets/images/population.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('population') }}</h3>
            <p class="population-number">8.66 M</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/globos-blue.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('Territory') }}</h3>
            <p class="population-number">41.290 KM2</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/home.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('AVG') }}</h3>
            <p class="population-number">$1.100.200</p>
          </div>
        </div>
        <a href="#" class="population-href">{{ $t('ExploreMore') }}</a>
      </div></swiper-slide>
      <swiper-slide class="swiper-slide slide3"><div class="swiper-texts">
        <p class="slide-text">{{ $t('Take') }}</p>
        <h2 class="slide-title">{{ $t('Dubai') }}</h2>
        <a href="#" class="slide-href">{{ $t('Go') }}</a>
      </div>
      <div class="swiper-info">
        <div class="population">
          <img class="population-img" src="@/assets/images/population.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('population') }}</h3>
            <p class="population-number">67.41 M</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/globos-blue.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('Territory') }}</h3>
            <p class="population-number">551.500 KM2</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/home.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('AVG') }}</h3>
            <p class="population-number">$425.600</p>
          </div>
        </div>
        <a href="#" class="population-href">{{ $t('ExploreMore') }}</a>
      </div></swiper-slide>
      <swiper-slide class="swiper-slide slide4"><div class="swiper-texts">
        <p class="slide-text">{{ $t('Take') }}</p>
        <h2 class="slide-title">{{ $t('Sharm') }}</h2>
        <a href="#" class="slide-href">{{ $t('Go') }}</a>
      </div>
      <div class="swiper-info">
        <div class="population">
          <img class="population-img" src="@/assets/images/population.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('population') }}</h3>
            <p class="population-number">69.86 M</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/globos-blue.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('Territory') }}</h3>
            <p class="population-number">513.120 KM2</p>
          </div>
        </div>
        <div class="population">
          <img class="population-img" src="@/assets/images/home.png" alt="">
          <div class="population-info">
            <h3 class="population-title">{{ $t('AVG') }}</h3>
            <p class="population-number">$165.450</p>
          </div>
        </div>
        <a href="#" class="population-href">{{ $t('ExploreMore') }}</a>
      </div></swiper-slide>
    </swiper>
    
  </div>
  </div>
</header>
</template>

<script setup>
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const modules = [Autoplay];

</script>

<style lang="scss" scoped>


</style>