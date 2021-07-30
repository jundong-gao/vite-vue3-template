<template>
    count: {{count}}
    <el-button type="primary" icon="el-icon-plus" @click="add">add count</el-button>
</template>

<script setup>
    import { ref } from 'vue'
    let count = ref(0)

    let add = function(){
        count.value++
    }
</script>
