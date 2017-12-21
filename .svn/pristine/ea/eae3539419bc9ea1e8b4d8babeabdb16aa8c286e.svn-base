<template>
    <div class="tr-list">
        <label v-show="_transferList.length<1" style="width: 100%; padding: 10px;">None.</label>
        <transfer-item 
        v-for="(item, i) in _transferList" 
        :key="i" 
        :id="item.id"
        :index="i"
        :title="_getTitle(item.sender)"
        :content="item.note"
        :createdAt="_getCreatedAt(item.createdAt)"
        ></transfer-item>
    </div>
</template>

<script>
import moment from 'moment'
import TransferItem from './TransferItem'
export default {
    props: {
        transferList: Array,
        userEmail: String
    },
    computed: {
        _transferList() {
            return this.transferList
        },
        _userEmail() {
            return this.userEmail
        }
    },
    methods: {
        _getTitle(emailSender) {
            if (this._userEmail === emailSender) 
                return 'Transfer'
            else
                return 'Received'
            
        },
        _getCreatedAt(time) {
            return moment(time).format('MMMM Do YYYY, h:mm:ss a')
        }
    },
    components: {
        TransferItem
    }
}
</script>

<style scoped>
.tr-list {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
}
</style>
