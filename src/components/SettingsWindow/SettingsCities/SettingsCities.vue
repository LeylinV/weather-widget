<template>
    <div class="settings">
        <div class="title">Settings</div>
        <CitiesList 
            :citiesList="citiesList" 
            @delete-city='deleteHandler'
            @reordered="reorderedHandler"
        />
    </div>
</template>

<script lang="ts">
import CitiesList from './CitiesList/CitiesList.vue'
import { defineComponent, PropType } from 'vue'
import { City } from '@/types/City'

export default defineComponent({
    name: 'SettingsCities',
    props: {
        citiesList: {
            type: Array as PropType<City[]>,
            required: true,
        }
    },
    data () {
        return {}
    },
    methods: {
        deleteHandler(index: number): void{
            this.$emit('delete-city', index)
        },
        reorderedHandler(options: { fromIndex: number; toIndex: number }){
            this.$emit('reordered', options); 
        },
    },
    components:{
        CitiesList
    }
})
</script>

<style lang="scss" scoped>
.title{
    font-weight:500;
}
</style>