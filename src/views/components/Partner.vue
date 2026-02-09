<template>
    <div class="mainP mt200 mb100" id="Partner">
        <Title>{{ $t('合作伙伴All') }}</Title>
    </div>
    <div class="flex jc wrap logos">
        <img src="@/assets/imgs/partner1.png" class="partnerLogo">
        <img src="@/assets/imgs/partner2.png" class="partnerLogo">
        <img src="@/assets/imgs/partner3.png" class="partnerLogo">
        <img src="@/assets/imgs/partner4.png" class="partnerLogo">
        <img src="@/assets/imgs/partner5.png" class="partnerLogo">
        <img src="@/assets/imgs/partner6.png" class="partnerLogo">
        <img src="@/assets/imgs/partner7.png" class="partnerLogo">
        <img src="@/assets/imgs/partner8.png" class="partnerLogo">
        <img src="@/assets/imgs/partner9.png" class="partnerLogo">
        <img src="@/assets/imgs/partner10.png" class="partnerLogo">
        <img src="@/assets/imgs/partner11.png" class="partnerLogo">
        <img src="@/assets/imgs/partner12.png" class="partnerLogo">
        <img src="@/assets/imgs/partner13.png" class="partnerLogo">
        <img src="@/assets/imgs/partner14.png" class="partnerLogo">
        <img src="@/assets/imgs/partner15.png" class="partnerLogo">
        <img src="@/assets/imgs/partner16.png" class="partnerLogo">
        <img src="@/assets/imgs/partner17.png" class="partnerLogo">
        <img src="@/assets/imgs/partner18.png" class="partnerLogo">
        <img src="@/assets/imgs/partner19.png" class="partnerLogo">
        <img src="@/assets/imgs/partner20.png" class="partnerLogo">
        <img src="@/assets/imgs/partner21.png" class="partnerLogo">
        <img src="@/assets/imgs/partner22.png" class="partnerLogo">
    </div>
</template>

<script setup lang="ts">
import Title from '@/components/Title.vue';
</script>

<style lang="scss" scoped>
.logos{
    padding: 0 15px;
    .partnerLogo{
        height: 34px;
        width: auto;
        margin: 20px 15px;
    }
}
</style>