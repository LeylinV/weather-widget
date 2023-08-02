<template>
    <div class="settings">
        <SettingsCities 
            :citiesList="citiesList" 
            @delete-city='deleteHandler'
            @reordered="reorderedHandler"
        />
        <CityAdder @city-added="onCityAdded"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SettingsCities from './SettingsCities/SettingsCities.vue';
import CityAdder from './CityAdder/CityAdder.vue';
import {City} from '@/types/City'

export default defineComponent({
    name: 'SettingsWindow',
    props: {
        citiesList: {
            type: Array as PropType<City[]>,
            required: true,
        }
    },
    data() {
        return {
            
        };
    },
    methods: {
        onCityAdded(cityName: string) {
            this.$emit('city-added', cityName);
        },
        deleteHandler(index: number): void{
            this.$emit('delete-city', index)
        },
        reorderedHandler(options: { fromIndex: number; toIndex: number}){
            this.$emit('reordered', options); 
        },
    },
    components: { SettingsCities, CityAdder }
})
</script>

<style lang="scss" scoped>
.settings{

}
</style>