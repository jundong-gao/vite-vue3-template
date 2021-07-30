<template>
    <div ref="echartsRef" class="echarts"></div>
</template>

<script setup>
    import echarts from 'echarts'
    import { onMounted, ref } from 'vue'
    let myEcharts = null
    const echartsRef = ref(null)


    onMounted(() => {
        let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };


        if(!myEcharts) myEcharts = echarts.init(echartsRef.value)
        
        myEcharts.setOption(option)
        

    }) 


</script>

<style lang="scss">
    .echarts{width: 300px; height: 300px;}    
</style>