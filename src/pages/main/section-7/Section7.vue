<template>
 <main>
  <section class="section7">
    <div class="container">
      <div class="titles">
        <h2>{{ $t('Makeyour') }}</h2>
        <h2 class="title2">{{ $t('Reservation') }} </h2>
        <h2>{{ $t('ThroughThis') }}</h2>
        <h2 class="title4"> {{ $t('Form') }}</h2>
      </div>

<form method="POST" @submit.prevent="submit">
      <div class="sect7-info" >
        <div class="input-text">
        <div class="inp-text">
          <p class="p">{{ $t('YourName') }}</p>
          <input  type="text" v-model="userName" name="" class="inputsy" id="name" placeholder="Ex. John Smithee">
        </div>
        <div class="inp-text">
          <p class="p">{{ $t('NumberOfGuests') }}</p>
          <input v-model="number" type="number" class="inputsy" name="" id="number" >
        </div>
      </div>
        <div class="input-text">
        <div class="inp-text">
          <label class="p">{{ $t('YourPhoneNumber') }}</label>
          <input v-model="tellnumber" type="tell" class="inputsy" name="tellnumber" id="tellnumber" placeholder="Ex. +99899 999 99 99">
        </div>
        <div class="inp-text">
          <p class="p">{{ $t('CheckInDate') }}</p>
          <input v-model="data"class="inputsy" type="date" name="" >
        </div>
      </div>
      </div>
      <div class="input-end">
        <p class="p">{{ $t('ChooseYourDestination') }}</p>
      
        <input v-model="turkey" type="text" class="inputsy l" id="turkey" name="turkey">
        <p class="p">{{ $t('ChooseYourVisaSupport') }}</p>
        <input v-model="country" class="inputsy k" type="text" id="country">
  
      </div>
      <div class="sec7-btn">
      <button @click="flow != flow" :class="{'flow-active':flow}" class="buttons" type="submit">{{ $t('MakeYourReservationNow') }}</button>
    </div>
  </form>
  
    </div>
  </section>
 </main>
</template>

<script setup>
import { ref } from 'vue';


const userName = ref("")
const number = ref("")
const tellnumber = ref("")
const data = ref("")
const turkey = ref("")
const country = ref("")

const token = import.meta.env.VITE_TG_TOKEN
const chatId = import.meta.env.VITE_TG_CHATID

let flow = ref(false)

const submit = () => {

    const txt = ref("")

    const tgObj = ref({
        name: userName.value,
        tellnumber: tellnumber.value,
        number: number.value,
        data: data.value,
        turkey: turkey.value,
        country: country.value
    })

    for (const key in tgObj.value) {
        txt.value += `${key}: ${tgObj.value[key]} %0A`
    }

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt.value}`)
}
</script>
