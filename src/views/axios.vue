<template>
    <div v-for="item in list" :key="item.id">{{item.name}}</div>
</template>


<script setup>
    import { getCurrentInstance, onMounted, ref } from 'vue'
    const { proxy } = getCurrentInstance()
    let list = ref([])


    const getList = () => {
        proxy.$http.get('http://mock.gaojundong.com/info/list').then(res => {
            list.value = res.data.data
        })
    }

    onMounted(getList)
</script>