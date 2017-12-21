<template>
    <div class="style-root">
    </div>
</template>


<script>
export default {
    name: 'banner-our-company',
    data() {
        return {
            
        }
    }
}
</script>

<style>
.style-root{
    background-image: url('../../../../assets/images/about/background-banner-about.png');
    width: 920px;
    height: 500px;
    background-size: 91% 90%;
    -webkit-animation: fadein 1s;
}
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
@media screen and (max-width: 480px){
    .style-root{
        width: 87vw;
        height: 50vh;
    }
}
</style>
