<template>
    <div class="city">
        <div class="city-name">{{ formattedCityWeather.cityName }}</div>
        <div class="city-temp__block">
            <div class="city-img">
                <img :src='formattedCityWeather.imgUrl' />
            </div>
            <div class="city-temp">{{ formattedCityWeather.temp }}</div>
        </div>
        <div class="city-description">{{ formattedCityWeather.description}}</div>
        <div class="city-info">
            <div class="info-windSpeed">Wind: {{ formattedCityWeather.windSpeed}}</div>
            <div class="info-pressure">Pressure: {{ formattedCityWeather.pressure}}</div>
            <div class="info-humidity">Humidity: {{ formattedCityWeather.humidity}}</div>
            <div class="info-dewPoint">Dew point: {{ formattedCityWeather.dewPoint}}</div>
            <div class="info-visibility">Visibility: {{ formattedCityWeather.visibility}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { WeatherData } from '@/types/WeatherData';
import { FormattedWeatherData } from '@/types/FormattedWeatherData'
import { PropType, defineComponent } from 'vue';
import { getFormattedWeather } from './helpers/getFormattedWeather'

interface State {
    formattedCityWeather: FormattedWeatherData,
}

    export default defineComponent ({
        name: 'SingleCard',
        props: {
            cityWeather: {
                type: Object as PropType<WeatherData>,
                required: true,
            }
        },
        data (): State{
            return{
                formattedCityWeather: {} as FormattedWeatherData
            }
        },
        methods:{
            formatWeather():void{
                this.formattedCityWeather = getFormattedWeather(this.cityWeather)
            }
        },
        mounted() {
            this.formatWeather()
        }
    })
</script>

<style lang="scss" scoped>
    .city{
        max-width: 300px;
        margin-bottom: 5px;
        padding-bottom: 10px;
        .city-name{
            font-weight: 500;
        }
        .city-temp__block{
            display: flex;
            align-items: center;
            font-size: 50px;
            justify-content: center;
            font-weight: 500;
        }
        .city-description{
            margin: 25px 0;
        }
        .city-info{
            display: flex;
            flex-wrap: wrap;
            >div{
                width: 50%;
                padding-bottom: 15px;
            }
        }
    }

</style>