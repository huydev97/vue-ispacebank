<template>
    <v-container class="white about-container">
        <v-layout wrap>
            <left-page class="about-leftpage" style="flex:1"></left-page>
            <right-page class="about-rightpage" style="flex:4"></right-page>
        </v-layout>
    </v-container>
</template>

<script>
const LeftPage = () => import('@/components/AboutPage/LeftPart')
const RightPage = () => import('@/components/AboutPage/RightPart')


export default {
    name: 'AboutPage',
    components: {
        LeftPage,
        RightPage
    }
}
</script>

<style scoped>
.about-container {
    max-width: 100%;
    margin-bottom: 80px;
}

.about-leftpage {
    width: 300px;
    margin-left: 60px;
    margin-right: 0px;
    padding-top: 70px;
}

.about-rightpage {
    width: 870px;
    margin-left: 0px;
    padding-top: 70px;
    margin-right: 60px;
}
</style>