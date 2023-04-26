<script setup lang="ts">
import PrmButton from 'primevue/button';
import ScrxLogo from '@/assets/img/secrox-logo.svg?component';

const linkList = {
  instagram: 'https://instagram.com/secrox.official?igshid=YmMyMTA2M2Y=',
  form: 'https://bit.ly/SECROXQuestionnaire',
};

function onOpenLink(event: Event) {
  if ((event.target as HTMLElement).innerText === 'Instagram') {
    window.open(linkList.instagram, '_blank');
  }
  if ((event.target as HTMLElement).innerText === 'Order') {
    window.open(linkList.form, '_blank');
  }
}
</script>

<template>
  <div class="grid grid-nogutter text-800 md:p-6 p-3">
    <div class="col-12 md:col-6 text-center md:text-left flex align-items-center md:pr-3">
      <section>
        <span class="block md:text-3xl text-3xl font-bold mb-1">
          The best gift for someone who has everything 🪄
        </span>
        <div class="md:text-3xl text-3xl text-primary font-bold mb-3">
          You don't know what's inside and you'll love it 😍
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3">
          While our website is under construction you can still order your perfect gift via Instagram or Special form.
        </p>
        <prm-button label="Instagram" type="button" class="mr-3 p-button-raised" @click="onOpenLink($event)"></prm-button>
        <prm-button label="Order" type="button" class="p-button-outlined" @click="onOpenLink($event)"></prm-button>
      </section>
    </div>
    <div class="col-12 md:col-6">
      <scrx-logo class="md:ml-auto block w-50 text-800" />
    </div>
  </div>
</template>