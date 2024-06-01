<template>
  <main>
  <nav class="nav">
    <div class="container">
      <div class="navbar">
   <div class="nav-logo">
    <img src="../assets/images/globus.svg" alt="" class="nav__logo-img">
    <div class="nav-titles">
    <h1 class="nav__logo-title">{{ $t('zamon') }}</h1>
    <p class="nav__logo-text">{{ $t('bussins') }}</p>
  </div>
</div>
<ul class="nav-list">
  <RouterLink to="/" class="nav-item">{{ $t('home') }}</RouterLink>
  <RouterLink to="/" class="nav-item">{{ $t('About') }}</RouterLink>
  <RouterLink to="/" class="nav-item">{{ $t('Tours') }}</RouterLink>
  <RouterLink to="/" class="nav-item">{{ $t('Contacts') }}</RouterLink>
</ul> 
<ul class="nav-list-to">
  <button @click="$i18n.locale='uz'" class="nav-item2">UZ</button>
  <button @click="$i18n.locale='en'" class="nav-item2">ENG</button>
  <button @click="$i18n.locale='ru'" class="nav-item2">RU</button>
  <RouterLink to="/" class="nav-img-telegram"><img src="../assets/images/telegram.png" alt=""></RouterLink>
  <RouterLink to="/" class="nav-img-instagram"><img src="../assets/images/instagram.svg" alt=""></RouterLink>
</ul>
<div class="nav__burger" >
          <div @click="burger =!burger" class="nav__burger-btn" :class="{ 'activeburger': burger }">
            <span></span>
          </div>
       
        <div class="nav__burger-navigation" :class="{'activated' : burger}">
           <a href="" class="nav__burger-navigation-link">{{ $t('home') }}</a>
           <a href="#about" @click="burger=false" class="nav__burger-navigation-link">{{ $t('About') }}</a>
           <a href="#tours" @click="burger=false" class="nav__burger-navigation-link">{{ $t('Tours') }}</a>
           <a href="#contact" @click="burger=false"  class="nav__burger-navigation-link">{{ $t('Contacts') }}</a>
           <button @click="$i18n.locale='uz'" class="nav__burger-navigation-link">UZ</button>
           <button @click="$i18n.locale='en'" class="nav__burger-navigation-link">EN</button>
           <button @click="$i18n.locale='ru'" class="nav__burger-navigation-link">RU</button>
           <button class="nav__burger-navigation-link"><img class="nav-img-telegram"  src="@/assets/images/telegram.png" alt=""></button>
           <a href="" class="nav__burger-navigation-link"><img class="nav-img-telegram" src="@/assets/images/instagram.svg" alt=""></a>
        </div>
      </div>
</div>
       

</div>
  </nav>
</main>
</template>

<script setup>
import { ref } from 'vue';

const burger =ref(false)

</script>
