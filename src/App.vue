<template>
    <el-button-group>
        <el-button type="primary" @click="navigate('/')">Add Count</el-button>
        <el-button type="primary" @click="navigate('/echarts')">Echarts</el-button>
        <el-button type="primary" @click="navigate('/axios')">Axios</el-button>
    </el-button-group>
    

    <pre>
        store中获取的数据name==== {{name}}
    </pre>


    <div class="router-view">
        <router-view></router-view>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    const router = useRouter()
    const store = useStore()
    
    const name = store.getters.getName

    const navigate = url => {
        router.push(url)
    }

</script>

<style>
    .router-view{margin-top: 20px;}
</style>
