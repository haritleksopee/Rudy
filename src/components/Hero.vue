<template>
    <div class="mb-5 position-relative" id="Home">
        <carousel :autoplay="true" :items="1" :nav="false">
            <div >
                <div class="banner-dark"></div>
                <img class="w-100" src="../assets/images/banner.jpg">
            </div>
            <div>
                <div class="banner-dark"></div>
                <img  class="w-100" src="https://placeimg.com/2556/1437/any?2">
            </div>
        </carousel>
        <div class="banner-content text-center text-white">
            <h1 class="">Book FLight, Get Free Sleep</h1>
            <b>is simply dummy text of the printing and 
typesetting industry.</b>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: 'Hero',
    components: { carousel },
}
</script>