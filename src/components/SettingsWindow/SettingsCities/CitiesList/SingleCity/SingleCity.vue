<template>
    <li class="city">
        <div class="handle">
            <div class="handle-burger"><ListBurger /></div>
            <div>{{ city }}</div>
        </div>
        <div class="trash">
            <TrashButton @click="deleteHandler"/>
        </div>
    </li>
</template>

<script lang="ts">
import TrashButton from '/src/assets/SVG/TrashButton/TrashButton.vue'
import ListBurger from '/src/assets/SVG/ListBurger/ListBurger.vue'
import { defineComponent, PropType } from 'vue'
import { City } from '@/types/City'

export default defineComponent({
    name: 'SingleCity',
    props: {
        city: {
            type: String as PropType<City>,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
    data (){
        return {

        }
    },
    methods: {
        deleteHandler(){
            this.$emit('deleteCity', this.index)
        }
    },
    components:{
        ListBurger, TrashButton
    }
})
</script>

<style lang="scss" scoped>
.city{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 25px 0;
    .handle{
        display: flex;
        align-items: center;
        :first-child{
            margin-right: 5px;
        }
    }
    .trash{
        cursor: pointer;
    }
    .handle-burger{
        cursor: move;
    }
}
</style>