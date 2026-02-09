<template>
    <div class="banner flex jc" id="Home">
        
        <img src="@/assets/imgs/banner1.png" class="bannerImg">
        
        <div class="rel flex col ac">
            <img src="@/assets/imgs/2.png" class="pic2">
            <img src="@/assets/imgs/3.png" class="pic3">
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.banner{
    position: relative;
    .bannerImg{
        width: 100vw;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    .pic2{
        height: auto;
        position: absolute;
        z-index: 1;
    }
    .pic3{
        height: auto;
        position: relative;
        z-index: 2;
        margin: 0 auto;
    }
}

/* 大屏幕 */
@media (min-width: 576px) {
    .banner {
        padding: 490px 0 60px 0;
        .pic2{
            width: 32vw;
            bottom: 6vw;
        }
        .pic3{
            width: 60vw;
        }
    }
}


/* 小屏幕 */
@media (max-width: 575px) {
    .banner {
        align-items: center;
        padding: 290px 0 60px 0;
        .pic2{
            width: 62vw;
            bottom: 10vw;
        }
        .pic3{
            width: 100vw;
        }
    }
}
</style>