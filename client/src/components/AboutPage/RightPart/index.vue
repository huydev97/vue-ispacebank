<template>
    <v-container class="white about-container">
        <v-layout column wrap>
            <banner style="flex:1"></banner>

            <v-layout style="flex:1" wrap>
                <about-company style="flex:1; margin-right:25px"></about-company>
                <our-service style="flex:1.1"></our-service>
            </v-layout>

            <our-mission style="margin-top: 100px; flex:1"></our-mission>

            <see-how-we-work style="margin-top: 100px; flex:1"></see-how-we-work>
        </v-layout>
    </v-container>
</template>

<script>
const Banner = () => import('@/components/AboutPage/RightPart/Banner')
const AboutCompany = () => import('@/components/AboutPage/RightPart/AboutCompany')
const OurService = () => import('@/components/AboutPage/RightPart/OurService')
const OurMission = () => import('@/components/AboutPage/RightPart/OurMission')
const SeeHowWeWork = () => import('@/components/AboutPage/RightPart/SeeHowWeWork')

export default {
    name: 'RightPart',
    components: {
        Banner,
        AboutCompany,
        OurService,
        OurMission,
        SeeHowWeWork
    }

}
</script>

