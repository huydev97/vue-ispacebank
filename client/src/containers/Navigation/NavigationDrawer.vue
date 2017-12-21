<template>
    <div>
        <v-navigation-drawer temporary v-model="isDrawer" light overflow>
            <v-list class="pt-0" dense>
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" @click="">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    props: {
        drawer: Boolean,
        toggleMenuDrawer: Function
    },
    data() {
        return {
        }
    },
    computed: {
        isDrawer() {
            return this.drawer
        },
        _toggleMenuDrawer() {
            return this.toggleMenuDrawer
        }
    }
}
</script>

<style scoped>

</style>

