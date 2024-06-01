<template>
 <main>
  <section>
    <div class="container">
      <h2>{{ $t('BestLocations') }}</h2>
      <p>{{ $t('DiscovertheBest') }}</p>
      
      <div class="slader">
        <div class="dubai5" @click="active =! active" :class="{'active':active}">
          <div class="slader-text">
          <img class="img-regular" src="@/assets/images/regular.png" alt="">
          <div class="texts-slide" id="5">
            <h3 class="popu-title">{{ $t('Dubai') }}</h3>
            <b class="population-text">{{ $t('population') }} 2M</b>
          </div>
        </div>
        </div>
        <div class="dubai5 antalya5" > <div class="slader-text" id="1">
          <img  class="img-regular" src="@/assets/images/regular.png" alt="">
          <div class="texts-slide">
            <h3 class="popu-title">{{ $t('Dubai') }}</h3>
            <b class="population-text">{{ $t('population') }} 2M</b>
          </div>
        </div></div>
        <div class="dubai5 istanbul5"> <div class="slader-text" id="2">
          <img class="img-regular" src="@/assets/images/regular.png" alt="">
          <div class="texts-slide">
            <h3 class="popu-title">{{ $t('Istanbul') }}</h3>
            <b class="population-text">{{ $t('population') }} 2M</b>
          </div>
        </div></div>
        <div class="dubai5 sharm5"> <div class="slader-text" id="3">
          <img class="img-regular" src="@/assets/images/regular.png" alt="">
          <div class="texts-slide">
            <h3 class="popu-title">{{ $t('Sharm') }}</h3>
            <b class="population-text">{{ $t('population') }} 2M</b>
          </div>
        </div></div>
        <div class="dubai5 paris5"> <div class="slader-text" id="4">
          <img class="img-regular" src="@/assets/images/regular.png" alt="">
          <div class="texts-slide">
            <h3 class="popu-title">{{ $t('Paris') }}</h3>
            <b class="population-text">{{ $t('population') }} 2M</b>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
 </main>
</template>

<script setup>
import { ref } from 'vue';

let active= ref(false)
let antalya= ref(false)

</script>

<style lang="scss" scoped>


</style>