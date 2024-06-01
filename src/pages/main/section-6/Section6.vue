<template>
 <main>
  <section>
    <div class="container">
      <div class="sect6-bacround">
        <h3 class="sect6-text">{{ $t('Book') }}</h3>
        <h2 class="sect6-title">{{ $t('MakeYour') }}</h2>
        <button class="sect6-btn">{{ $t('DiscoverMore') }}</button>

      </div>
      <div class="call-email-ofis">
        <div class="call">
          <img class="call-img" src="@/assets/images/call.jpg" alt="">
          <h2 class="call-title">{{ $t('MakePhone') }}</h2>
          <p class="call-num">{{ $t('callNumber') }}</p>
        </div>
        <div class="call">
          <img class="call-img" src="@/assets/images/MAIL.png" alt="">
          <h2 class="call-title">{{ $t('ContactUsEmail') }}</h2>
          <p class="call-num">zamonbiznestour@mail.ru</p>
        </div>
        <div class="call">
          <img class="call-img" src="@/assets/images/adres.png" alt="">
          <h2 class="call-title">{{ $t('VisitOurOffices') }}</h2>
          <p class="call-num">15/25, Chilanzar - 9, Tashkent city</p>
        </div>
      </div>
      <div class="maps">
      <iframe class="karta" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5997.631861336377!2d69.17951609302811!3d41.26934353525998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89f3371e0833%3A0x657012c8c99d5f97!2z0KfQuNC70LDQvdC30LDRgC0xOSwg0KLQsNGI0LrQtdC90YIsINCi0LDRiNC60LXQvdGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1716430011045!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
  </section>
 </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>