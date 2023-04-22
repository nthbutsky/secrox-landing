<script setup lang="ts">
import Button from 'primevue/button';

</script>

<template>
    <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
                <span class="block text-6xl font-bold mb-1">Create the presents your</span>
                <div class="text-6xl text-primary font-bold mb-3">loved ones deserve to get</div>
                <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
                <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
            </section>
        </div>
        <div class="col-12 md:col-6">
            <img src="@/assets/img/logo-solid-white.png" alt="Image" class="md:ml-auto block w-full">
        </div>
    </div>
</template>

<style scoped></style>
