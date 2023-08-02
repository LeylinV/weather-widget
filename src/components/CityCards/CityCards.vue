<template>
    <SingleCard 
        v-for="(cityWeather) in citiesWeather"
        :city-weather="cityWeather"
        :key = cityWeather.id
    />
</template>

<script lang="ts">
import { WeatherData } from '@/types/WeatherData';
import { PropType, defineComponent } from 'vue';
import SingleCard from './SingleCard/SingleCard.vue';

    export default defineComponent ({
    name: 'CityCards',
    props: {
        citiesWeather: {
            type: Array as PropType<WeatherData[]>,
            required: true,
        }
    },
    components: { SingleCard }
})
</script>

<style lang="scss" scoped>

</style>