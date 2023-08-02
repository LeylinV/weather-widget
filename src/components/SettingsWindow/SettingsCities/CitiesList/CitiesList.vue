<template>
    <ul class="cities" ref="citiesListRef">
        <SingleCity 
            v-for="(city, index) in citiesList" 
            :city="city" 
            :index="index"
            :key="index" 
            class="menu-item"
            @delete-city='deleteHandler'
        />
    </ul>
</template>

<script lang="ts">
import SingleCity from './SingleCity/SingleCity.vue'
import { defineComponent, PropType } from 'vue'
import { City } from '@/types/City'
import Sortable from 'sortablejs';


export default defineComponent({
    props: {
        citiesList: {
            type: Array as PropType<City[]>,
            required: true,
        }
    },
    name: 'CitiesList',
    data (){
        return {}
    },
    methods: {
        deleteHandler(index: number): void{
            this.$emit('delete-city', index)
        },
        reorderedHandler({ fromIndex, toIndex }: { fromIndex: number; toIndex: number }): void {
            this.$emit('reordered', { fromIndex, toIndex });
        },
    },
    mounted() {
        const options = {
            onEnd: (evt: any) => {          
                const fromIndex = evt.oldIndex;
                const toIndex = evt.newIndex;
                this.reorderedHandler({fromIndex, toIndex})
            },
            animation: 150,
            handle: '.handle-burger',
            move: true,
        };
        const citiesListRef = this.$refs.citiesListRef as HTMLElement;
        Sortable.create(citiesListRef, options);
    },
    components:{
        SingleCity
    }
})
</script>

<style lang="scss" scoped>
.cities{
    padding: 0 10px;
}
</style>