<template>
    <div class="weather-widget" id="app">
      <CityCards v-if="!showMenu" :cities-weather="weatherDatas"/>
      <SettingsWindow v-else 
        :citiesList="cities" 
        @city-added="addCity" 
        @delete-city='removeCity'
        @reordered="reorderedHandler"
      />
      <NavigationButton @click="toggleMenu" :showMenu="showMenu"/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { City } from './types/City'
  import { WeatherData } from './types/WeatherData'
  import CityCards from './components/CityCards/CityCards.vue';
  import NavigationButton from './components/NavigationButton/NavigationButton.vue'
  import SettingsWindow from './components/SettingsWindow/SettingsWindow.vue'
  import {getWeatherForCity} from './api/index'

  export default defineComponent({
    name: 'weather-widget',
    
    data() {
        return {
            cities: [] as City[],
            weatherDatas: [] as WeatherData[],
            showMenu: false,
        };
    },
    async mounted() {
        await this.getFromStorage()
        setInterval(this.getWeatherForAll, 60000); 
    },
    methods: {
        async getWeatherForAll(){
            this.weatherDatas = []
            for (const city of this.cities) {
                const weather = await getWeatherForCity(city);
                this.weatherDatas.push(weather);
            }
        },
        async getFromStorage(){
            const savedCities = localStorage.getItem('cities');
            if (savedCities) {
                this.cities = JSON.parse(savedCities);
                this.getWeatherForAll()
            }
        },
        async addCity(cityName: string) {
            if (cityName.trim() === ''){
                return;
            }
            const weather = await getWeatherForCity(cityName)
            if(Object.keys(weather).length > 0){
              this.weatherDatas.push(weather);
              this.cities.push(weather.name);
              this.saveToLocalStorage(this.cities); 
            }
        },
        removeCity(index: number) {
            this.cities.splice(index,1)
            this.weatherDatas.splice(index, 1)
            this.saveToLocalStorage(this.cities);
        },
        toggleMenu() {
            this.showMenu = !this.showMenu;
            this.getFromStorage()
        },
        reorderedHandler({fromIndex, toIndex}: { fromIndex: number; toIndex: number}){
            const copy = [...this.cities]
            const movedCity = copy.splice(fromIndex, 1)[0];
            copy.splice(toIndex, 0, movedCity);
            this.saveToLocalStorage(copy);
        },
        saveToLocalStorage(arr: City[]):void {
            localStorage.setItem('cities', JSON.stringify(arr));
        },
    },
    components: { CityCards, NavigationButton, SettingsWindow}
});
  </script>
  
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');  
  *{
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .weather-widget{
    position: relative;
    max-width: 300px;
    padding: 10px;
  }
  </style>
  