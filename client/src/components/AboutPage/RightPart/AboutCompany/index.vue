<template>
    <div>
        <v-layout>
            <v-icon style="font-weight: bold">check</v-icon>
            <div class="style-header">About Company</div>
        </v-layout>
        <p style="margin-top: 20px" class="style-content">We are a leader in global payment services. From small businesses and global corporations, 
            to families near and far away, to NGOs in the most remote communities on Earth, iSpace Bank
            Helps people and businesses move money - to help grow economies and realize a better world.
            <BR/>
            <BR/>
            We continue to innovate, developing new ways to send money through digital, mobile, and 
            retail channels, with an array of convenient pay-out options to meet business and consumer
            needs.
       </p>
    </div>
</template>


<script>
export default {
    name: 'about-our-company',
    data() {
        return {
            
        }
    }
}
</script>

<style>
.style-header{
    font-weight: bold;
    font-size: 20px;
    margin-left: 3px;
}
.style-content{
    color:#9e9e9e;
    font-weight: 500;
    font-size: 13px;   
}
</style>
