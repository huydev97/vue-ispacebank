<template>
    <v-container class="white about-container">

        <contact-info></contact-info>

        <div class="p-divider">
            <v-divider light></v-divider>
        </div>

        <contact-form></contact-form>
        
    </v-container>
</template>

<script>
const ContactInfo = () => import('@/components/ContactPage/ContactInfo')
const ContactForm = () => import('@/components/ContactPage/ContactForm')


export default {
    name: 'ContactPage',
    components: {
        ContactInfo,
        ContactForm
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