<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1 offset-md1>
                <v-card v-for="(item,i) in items" :key="i" style="margin-top: 30px">
                    <v-container fluid>
                        <v-layout column wrap>
                            <v-flex class="style-card-detail" xs12 sm10 md8>
                                <v-card-tite xs5 sm4 md3>
                                    <div>
                                        <div class="style-title"> {{ item.title }} </div>
                                        <div> {{item.time}} </div>
                                    </div>
                                </v-card-tite>
                            </v-flex>
                            <v-flex>
                                <v-layout class="ml-3" row>
                                    <v-flex xs5 sm4 md3>
                                        <v-card-media :src="item.image" height="200px">
                                        </v-card-media>
                                    </v-flex>
                                    <v-flex xs7 sm8 md9>
                                        <div class="style-content"> {{ item.content }} </div>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn class="indigo white--text">
                                        <v-icon left light>arrow_forward</v-icon>
                                        Read More
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'ListNews',
    data() {
        return {
            items: [
                {
                    title: 'Breaking News',
                    time: '2:00 AM - 24/9/2017',
                    image: 'https://africanreporter.co.za/wp-content/uploads/sites/32/2017/08/news-2-e1481703815958.jpg',
                    content: 'content asdwwqd csdwqdwq dascsdsaq...'
                },
                {
                    title: 'Breaking News',
                    time: '2:00 AM - 24/9/2017',
                    image: 'https://africanreporter.co.za/wp-content/uploads/sites/32/2017/08/news-2-e1481703815958.jpg',
                    content: 'content asdwwqd csdwqdwq dascsdsaq...'
                },
                {
                    title: 'Breaking News',
                    time: '2:00 AM - 24/9/2017',
                    image: 'https://africanreporter.co.za/wp-content/uploads/sites/32/2017/08/news-2-e1481703815958.jpg',
                    content: 'content asdwwqd csdwqdwq dascsdsaq...'
                },
                {
                    title: 'Breaking News',
                    time: '2:00 AM - 24/9/2017',
                    image: 'https://africanreporter.co.za/wp-content/uploads/sites/32/2017/08/news-2-e1481703815958.jpg',
                    content: 'content asdwwqd csdwqdwq dascsdsaq...'
                },
                {
                    title: 'Breaking News',
                    time: '2:00 AM - 24/9/2017',
                    image: 'https://africanreporter.co.za/wp-content/uploads/sites/32/2017/08/news-2-e1481703815958.jpg',
                    content: 'content asdwwqd csdwqdwq dascsdsaq...'
                }
            ]
        }
    }
}
</script>

<style>
.style-title {
    font-size: 25px;
    font-weight: bold;
}

.style-content {
    font-size: 15px;
    margin-left: 20px;
}

.style-time {
    font-size: 15px;
}

.style-card-detail {
    margin: 20px 30px;
}
</style>
