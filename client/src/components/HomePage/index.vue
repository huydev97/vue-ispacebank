<template>
    <v-container style="margin: 0; padding: 0px;">

        <banner></banner>

        <!-- request a quote -->
        <div class="request-a-quote" style="height: 120px; padding: 20px; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between; align-items: center;">
            <h2 class=" grey--text text--darken-3" style="min-width: 300px; font-weight: 400; font-size: 22px; line-height: 1; text-align: left;">Bespoke unbiased advice, that makes a genuine difference to your finances</h2>
            <v-btn style="min-width: 140px; margin: auto;" to="/contact" primary large class="indigo white--text">REQUEST A QUOTE</v-btn>
        </div>
        <!-- about -->
        <about-us></about-us>
        <!-- services -->
        <our-services></our-services>
        <!-- why choose -->
        <why-choose></why-choose>
        <!-- partner -->
        <partner></partner>
        <!-- our team  -->
        <our-team></our-team>
    </v-container>
</template>

<script>
const Banner = () => import('./Banner')
const AboutUs = () => import('./AboutUs')
const OurServices = () => import('./OurServices')
const WhyChoose = () => import('./WhyChoose')
const Partner = () => import('./Partner')
const OurTeam = () => import('./OurTeam')

export default {
    name: 'Home',
    components: {
        Banner,
        AboutUs,
        OurServices,
        WhyChoose,
        Partner,
        OurTeam
    },
}
</script>

<style scoped>

</style>
