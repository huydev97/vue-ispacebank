<template>
    <v-container class="grey lighten-2 about-container">

       <list-news></list-news>
        
    </v-container>
</template>

<script>
const ListNews = () => import('@/components/NewsPage/ListNews')

export default {
    name: 'NewsPage',
    components: {
        ListNews
    }
}
</script>

<style scoped>
.about-container{
    max-width: 100%;
}
.p-divider{
    padding-right: 85px;
    padding-left: 85px;
}
</style>