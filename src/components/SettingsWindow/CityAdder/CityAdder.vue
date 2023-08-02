<template>
    <form class="adder" @submit="onFormSubmit">
        <div class="title">Add Location</div>
        <div class="adder-field">
            <input type="text" v-model="cityName" placeholder="Enter city name">
            <button type="submit"><ArrowEnter /></button>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowEnter from '/src/assets/SVG/ArrowEnter/ArrowEnter.vue'

export default defineComponent({
    name: 'SettingsCityAdder',
    data () {
        return {
            cityName: '',
        }
    },
    methods: {
    onFormSubmit(event: Event) {
            event.preventDefault();
            this.$emit('city-added', this.cityName);
            this.cityName = '';
        },
    },
    components:{ ArrowEnter }
})
</script>

<style lang="scss" scoped>
    .adder{
        padding: 0 10px;
        .title{
            font-weight: 500;
            margin: 5px 0;
        }
        .adder-field{
            width: 100%;
            display: flex;
            justify-content: space-between;
            button{
                border: none; 
                outline: none; 
                background: none;
                margin-left: 5px;
                cursor: pointer;
            }
            input{
                width:100%;
                font-size: 16px;
                padding: 5px 10px;
            }
        } 
    }

</style>