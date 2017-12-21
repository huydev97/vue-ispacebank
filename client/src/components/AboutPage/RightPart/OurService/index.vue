<template>
    <div>
        <v-layout>
            <v-icon style="font-weight: bold">check</v-icon>
            <div class="style-header">Our Service</div>
        </v-layout>
        <div>
            <v-layout>
                <div class="style-title-graph">Stocks</div>
                <div class="space-increase-stocks"></div>
                <div class="graph-detail">80%</div>
            </v-layout>
            <div style="width: 320px;" class="style-graph"></div>

            <v-layout>
                <div class="style-title-graph">Retirement</div>
                <div class="space-increase-retirement"></div>
                <div class="graph-detail">90%</div>
            </v-layout>
            <div style="width: 360px;" class="style-graph"></div>

            <v-layout>
                <div class="style-title-graph">Audit & Assurance</div>
                <div class="space-increase-audit-assurance"></div>
                <div class="graph-detail">80%</div>
            </v-layout>
            <div style="width: 320px;" class="style-graph"></div>

            <v-layout>
                <div class="style-title-graph">Mutual Funds</div>
                <div class="space-increase-mutual-funds"></div>
                <div class="graph-detail">100%</div>
            </v-layout>
            <div style="width: 400px;" class="style-graph"></div>

             <v-layout>
                <div class="style-title-graph">Invesment Trusts</div>
                <div class="space-increase-invesment-trusts"></div>
                <div class="graph-detail">75%</div>
            </v-layout>         
            <div style="width: 300px;" class="style-graph"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'service-our-company',
    data() {
        return {

        }
    }
}
</script>

<style>
.style-header {
    font-weight: bold;
    font-size: 20px;
    margin-left: 3px;
}

.style-graph {
    background: black;
    height: 12px;
    margin-top: 3px;
    -webkit-animation: increase-graph 2s;
}

.space-increase-stocks{
    width: 262px;
}
.space-increase-retirement{
    width: 280px;
}
.space-increase-audit-assurance{
    width: 200px;
}
.space-increase-mutual-funds{
    width: 302px;
}
.space-increase-invesment-trusts{
    width: 184px;
}

.graph-detail{
    background: url('../../../../assets/images/about/background-graph.jpg') no-repeat;
    background-size: 100% 100%;
    text-justify: center;
    text-align: center;
    color: white;
    padding: 10px;
    font-size: 11px;
    -webkit-animation: fade-in-detail-graph 4s;
}

.style-title-graph {
    color: #01579b;
    margin-top: 18px;
    font-weight: bold;
    font-size: 12px;
}
@-webkit-keyframes increase-graph {
    from { width: 0; }
    to   { width: 320; }
}
@-webkit-keyframes fade-in-detail-graph {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
