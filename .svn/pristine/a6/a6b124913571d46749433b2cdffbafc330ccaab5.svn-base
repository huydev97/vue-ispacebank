<template>
    <div class="container">
        <div>
            <h3 class="headline" style="margin: 0; padding: 0"><label class="blue--text">#{{_id}}</label> {{_title}}</h3>
            <p class="subtitle" style="margin: 0; padding: 0">{{_content}}</p>
            <p>{{_createdAt}}</p>
        </div>
        <v-divider></v-divider>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        content: String,
        createdAt: String,
    },
    data() {
        return {
            sl: null,
            isRequesting: false
        }
    },
    computed: {
        _title() {
            return this.title
        },
        _content() {
            return this.content
        },
        _createdAt() {
            return this.createdAt
        },
        _isAdmin() {
            return this.isAdmin
        },
        _state() {
            return this.state
        },
        _id() {
            return this.id
        }
    },
    methods: {
        getStatus() {
            switch (this._state) {
                case 0:
                    return 'Wait...'
                case 1:
                    return 'Success'
                case 2:
                    return 'Canceled'
                default:
                    return 'Un-Know'
            }
        },
        async onClickProcess(e) {
            this.isRequesting = true
            let res = await this.processTransaction({
                id: this.id,
                index: this.index
            })
            this.isRequesting = false
        },
        async onClickCancel(e) {
            this.isRequesting = true
            let res = await this.cancelTransaction({
                id: this.id,
                index: this.index
            })
            this.isRequesting = false
        }
    }
}
</script>

<style scoped>
.container {
    min-width: 300px;
}
</style>
