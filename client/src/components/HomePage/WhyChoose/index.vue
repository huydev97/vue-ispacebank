
<template>
    <div>
        <v-container class="white" style="max-width: 100%;">
            <div class="wc-wrapper">
                <div style="flex: 1; display: flex; align-items: center; justify-content: center">
                    <img style="width: 90%" src="../../../assets/images/home-img-01.png" />
                </div>
                <div style="flex: 1">
                    <h2 class="wc-title">Why Choose Us?</h2>
                    <v-expansion-panel style="padding: 10px;">
                        <v-expansion-panel-content v-for="(item,i) in items" :key="i">
                            <div class="wc-subtitle body-3" style="font-size: 16px; min-width: 250px;" slot="header">{{item.subtitle}}</div>
                            <v-card>
                                <v-card-text v-for="(content,i) in item.content" :key="i" class="white lighten-3 grey--text text--darken-1">{{content}}</v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </div>
            </div>
        </v-container>
        <v-divider dark> </v-divider>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    subtitle: 'We connect people',
                    content: [
                        'We move money for better, enabling individuals, families and friends to reliably and seamlessly transfer money in ways that are convenient for them, whether that is walking into a retail Agent location or visiting our website, or tapping our iSpace Bank app to move money in minutes. We have an increasing number of social media platform partners, where customers can send money to friends and family easily and reliably.',
                        'We have an increasing number of social media platform partners, where customers can send money to friends and family easily and reliably.']
                },
                {
                    subtitle: 'We connect businesses',
                    content: [
                        `In a global economy, businesses have a growing need to move money around the globe and transact in different currencies, we’ve answered with iSpace Bank Business Solutions.`,
                        `Risk management helps protect business profits. Organizations work with our risk management specialists to build a simple plan to manage currency exposure and contain currency costs. Cash management assists businesses in control of cash flow.`,
                        `iSpace Bank Business Solutions can get the right information to make sound decisions, know your currency exposure and quickly forecast cash flow.`
                    ]
                },
                {
                    subtitle: 'We enable partnerships',
                    content: ['iSpace Bank Connect is a global cross-border, peer-to-peer payment solution that enables partners to allow their users to send money overseas to more than 110 countries and territories. By utilizing our web-view or API integration options, users on the partner platform can send money directly to a qualifying bank account or for cash pickup in over 40 currencies worldwide.']
                }
            ]
        }
    }
}
</script>

<style scoped>
.wc-title {
    font-size: 40px;
    line-height: 1;
    text-align: left;
    font-weight: 700;
    font-style: normal;
    text-transform: none
}

.wc-subtitle {
    font-size: 18px;
    font-weight: 700;
    color: #1f1f1f;
}

.wc-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>
