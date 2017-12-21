<template>
    <div>
        <v-layout>
            <v-icon style="font-weight: bold">check</v-icon>
            <div class="style-header">Our Mission</div>
        </v-layout>

        <div class="style-content">
            We provide automated trading solutions for Coin traders, asset managers, money managers, 
            brokers, financial institutions and investment funds and cooperate with top notch EA 
            friendly brokers. It's a business opportunity, you can invest on our EAmine to find more 
            profit.
        </div>
    </div>
</template>


<script>
export default {
    name: 'mission-our-company',
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
    margin-top: 20px; 
}
</style>
